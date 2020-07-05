package cn.edu.scut.iisdc.dao;

import cn.edu.scut.iisdc.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserDao {
    User getUserById(String id);

    List<User> getUserByDeptId(String deptId);

    void addUser(User user);

    void deleteUserById(String id);

    void setUserGroup(String userId,String group);
}
