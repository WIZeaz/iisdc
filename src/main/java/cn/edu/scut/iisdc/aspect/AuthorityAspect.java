package cn.edu.scut.iisdc.aspect;

import cn.edu.scut.iisdc.annotation.Authority;
import cn.edu.scut.iisdc.dao.DocumentDao;
import cn.edu.scut.iisdc.dao.RecordDao;
import cn.edu.scut.iisdc.dao.UserDao;
import cn.edu.scut.iisdc.entity.User;
import cn.edu.scut.iisdc.service.*;
import cn.edu.scut.iisdc.type.AuthType;
import cn.edu.scut.iisdc.type.IdType;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.lang.reflect.Method;

@Aspect
@Component
public class AuthorityAspect {
    @Autowired
    HttpSession session;

    @Autowired
    UserDao userDao;

    @Autowired
    RecordDao recordDao;

    @Autowired
    TokenService tokenService;

    @Autowired
    DocumentDao documentDao;

    @Before("@annotation(authority)")
    public void before(JoinPoint joinPoint, Authority authority) throws Exception {

        RequestAttributes requestAttributes=RequestContextHolder.getRequestAttributes();
        HttpServletRequest request=(HttpServletRequest) requestAttributes.resolveReference(RequestAttributes.REFERENCE_REQUEST);
        String token="";
        assert request != null;
        Cookie[] cookies=request.getCookies();
        for (Cookie cookie:cookies){
            if (cookie.getName().equals("token")) {
                token=cookie.getValue();
                break;
            }
        }
        if (token.equals("")) token=request.getHeader("token");
        if (token.equals("")) throw new Exception("Not Login");

        User user= tokenService.getUserByToken(token);
        if (user==null) throw new Exception("User Not Found");

        //如果用户是超级用户，直接通过
        if (user.getGroup().equals("superuser")) return;
        if (authority.authType()==AuthType.superuser) throw new Exception("Need Superuser");

        //寻找部门id
        Integer deptId=0;
        //get DeptId
        if (authority.idType()==IdType.entity) {
            Object object=joinPoint.getArgs()[authority.index()];
            Method method=object.getClass().getMethod("getDeptId");
            method.invoke(object);
        } if (authority.idType()==IdType.userId){
            deptId=user.getDeptId();
        } else {
            deptId=(Integer) joinPoint.getArgs()[authority.index()];
            if (authority.idType()==IdType.recordId) deptId=recordDao.getDocumentIdById(deptId);
            else if (authority.idType()==IdType.documentId){
                deptId=documentDao.getDocumentById(deptId).getDeptId();
            }
        }

        //System.out.println(user.getDeptId());
        //System.out.println(deptId);

        if (authority.authType()==AuthType.manageuser && !user.getGroup().equals("manageuser"))
            throw new Exception("Authority Failed");

        if (!tokenService.authorizeOperation(user.getDeptId(),deptId)) throw new Exception("Authority Failed");

    }
}
