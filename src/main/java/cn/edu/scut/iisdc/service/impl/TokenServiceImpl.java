package cn.edu.scut.iisdc.service.impl;

import cn.edu.scut.iisdc.dao.DepartmentDao;
import cn.edu.scut.iisdc.dao.UserDao;
import cn.edu.scut.iisdc.entity.User;
import cn.edu.scut.iisdc.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.UUID;

@Service
public class TokenServiceImpl implements TokenService {

    @Autowired
    HttpSession session;

    @Autowired
    DepartmentDao departmentDao;

    @Autowired
    UserDao userDao;

    @Override
    public String generateToken(String userId) {
        String uuid=UUID.randomUUID().toString();
        session.setAttribute(uuid,userId);
        return uuid;
    }

    @Override
    public String validateToken(String token) throws Exception {
        //System.out.println(session.getId(token));
        String userId=(String)session.getAttribute(token);
        if (userId==null) throw new Exception("Token Expired");
        return userId;
    }

    @Override
    public boolean authorizeOperation(Integer user_deptId, Integer deptId){
        while (deptId!=null){
            if (user_deptId.equals(deptId)) return true;
            deptId=departmentDao.getParentIdById(deptId);
        }
        return false;
    }

    @Override
    public void expireToken(String token) {
        if (session.getAttribute(token)!=null){
            session.removeAttribute(token);
        }
    }

    @Override
    public User getUserByToken(String token) throws Exception {
        String userId=(String)session.getAttribute(token);
        if (userId==null) throw new Exception("Session Expired");
        return userDao.getUserById(userId);
    }

}
