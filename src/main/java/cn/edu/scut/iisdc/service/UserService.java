package cn.edu.scut.iisdc.service;


import cn.edu.scut.iisdc.entity.User;


public interface UserService {
    User getUserById(String id) throws Exception;
    void deleteUserBuId(String id) throws Exception;
    boolean loginCheck(String username,String password);
    void addUser(User user);
}
