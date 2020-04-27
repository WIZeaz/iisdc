package cn.edu.scut.iisdc.service.impl;

import cn.edu.scut.iisdc.annotation.Authority;
import cn.edu.scut.iisdc.dao.UserDao;
import cn.edu.scut.iisdc.entity.User;
import cn.edu.scut.iisdc.service.UserService;
import cn.edu.scut.iisdc.type.IdType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public User getUserById(String id) throws Exception {
        User user=userDao.getUserById(id);
        if (user==null) throw new Exception("User do not exist");
        return user;
    }

    @Override
    public boolean loginCheck(String userId,String password){
        User user=userDao.getUserById(userId);
        if (user==null) return false;
        if (!user.getPassword().equals(password)) return false;
        return true;
    }

    @Override
    public void addUser(User user){
        userDao.addUser(user);
    }

    @Override
    @Authority(idType = IdType.userId)
    public void deleteUserBuId(String id) throws Exception {
        User user=userDao.getUserById(id);
        if (user==null) throw new Exception("No such user");
        userDao.deleteUserById(id);
    }
}
