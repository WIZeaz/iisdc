package cn.edu.scut.iisdc.service;

import cn.edu.scut.iisdc.entity.User;

public interface TokenService {
    String generateToken(String userId);
    String validateToken(String token) throws Exception;
    boolean authorizeOperation(Integer user_deptId, Integer deptId);
    void expireToken(String token);
    User getUserByToken(String token) throws Exception;
}
