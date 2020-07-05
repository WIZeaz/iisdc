package cn.edu.scut.iisdc.service;


import cn.edu.scut.iisdc.entity.Record;
import cn.edu.scut.iisdc.entity.User;

import java.util.List;


public interface UserService {
    User getUserById(String id) throws Exception;
    void deleteUserBuId(String id) throws Exception;
    boolean loginCheck(String username,String password);
    void addUser(User user);
    List<User> getUserByDeptId(String deptId) throws Exception;
    void setUserGroup(String userId,String group) throws Exception;
}
