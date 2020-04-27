package cn.edu.scut.iisdc.service;

import cn.edu.scut.iisdc.entity.Department;

import java.util.List;

public interface DepartmentService {
    List<Department> departmentList();
    Department getDepartmentById(Integer deptId) throws Exception;
    Department getParentById(Integer deptId) throws Exception;
    List<Department> getChildrenListById(Integer deptId);
    Integer getParentIdById(Integer deptId);
}
