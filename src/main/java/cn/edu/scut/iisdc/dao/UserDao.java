package cn.edu.scut.iisdc.dao;

import cn.edu.scut.iisdc.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {
    User getUserById(String id);

    void addUser(User user);

    void deleteUserById(String id);
}
