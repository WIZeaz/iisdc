package cn.edu.scut.iisdc.controller;

import cn.edu.scut.iisdc.entity.User;
import cn.edu.scut.iisdc.service.DocumentService;
import cn.edu.scut.iisdc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.context.annotation.RequestScope;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    DocumentService documentService;

    @RequestMapping(value = "/user/{id}",method = {RequestMethod.GET})
    public HashMap<String,Object> get(@PathVariable("id") String userId){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            User user=userService.getUserById(userId);
            resultMap.put("user",user);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/user",method = {RequestMethod.GET})
    public HashMap<String,Object> searchUser(@RequestParam HashMap<String,Object> params){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            String deptId=(String) params.get("deptId");
            List<User> users=userService.getUserByDeptId(deptId);
            resultMap.put("users",users);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/user",method = {RequestMethod.POST})
    public HashMap<String,Object> register(@RequestParam HashMap<String,Object> params){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            User user=new User();
            user.setUserId((String)params.get("userId"));
            user.setPassword((String)params.get("password"));
            try{
                user.setDeptId(Integer.valueOf((String)params.get("deptId")));
            } catch (Exception e){
                user.setDeptId(null);
            }
            user.setName((String)params.get("name"));
            user.setGender((String)params.get("gender"));
            user.setOriginName((String)params.get("originName"));
            user.setGroup("user");
            userService.addUser(user);

            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/user/{id}",method = {RequestMethod.DELETE})
    public HashMap<String,Object> delete(@PathVariable("id") String userId){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            userService.deleteUserBuId(userId);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/user/{id}/document",method = {RequestMethod.GET})
    public HashMap<String,Object> getDocument(@PathVariable("id") String userId){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            resultMap.put("documents",documentService.getDocumentByUserId(userId));
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/user/{id}",method = {RequestMethod.PUT})
    public HashMap<String,Object> changeUserGroup(@PathVariable("id") String userId,@RequestParam(value = "group") String group){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            userService.setUserGroup(userId,group);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

}
