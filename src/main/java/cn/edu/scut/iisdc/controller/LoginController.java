package cn.edu.scut.iisdc.controller;

import cn.edu.scut.iisdc.service.TokenService;
import cn.edu.scut.iisdc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

    @Autowired
    UserService userService;

    @Autowired
    TokenService tokenService;

    @RequestMapping(value = "/login",method = {RequestMethod.POST})
    public HashMap<String,Object> login(@RequestParam Map<String,Object> params, HttpServletResponse response){

        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            String userId=(String)params.get("userId");
            String password=(String)params.get("password");
            boolean result=userService.loginCheck(userId,password);
            if (result){
                String token= tokenService.generateToken(userId);
                Cookie cookie=new Cookie("token",token);
                response.addCookie(cookie);
            }
            resultMap.put("success",result);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/validate",method = RequestMethod.POST)
    public HashMap<String,Object> validate(@RequestParam Map<String,Object> params, @CookieValue(value = "token",defaultValue = "") String token){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            tokenService.validateToken(token);
            resultMap.put("user",tokenService.getUserByToken(token));
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/logout",method = RequestMethod.POST)
    public HashMap<String,Object> logout(@RequestParam Map<String,Object> params, @CookieValue(value = "token",defaultValue = "") String token){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            tokenService.expireToken(token);
            resultMap.put("success", true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

}
