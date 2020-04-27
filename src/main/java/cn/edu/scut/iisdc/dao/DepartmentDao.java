package cn.edu.scut.iisdc.dao;

import cn.edu.scut.iisdc.entity.Department;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DepartmentDao {
    List<Department> departmentList();
    Integer getParentIdById(Integer deptId);
    Department getDepartmentById(Integer deptId);
    List<Department> getChildrenListById(Integer deptId);

}
