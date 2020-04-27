package cn.edu.scut.iisdc.service.impl;

import cn.edu.scut.iisdc.dao.DepartmentDao;
import cn.edu.scut.iisdc.entity.Department;
import cn.edu.scut.iisdc.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {
    @Autowired
    DepartmentDao departmentDao;

    @Override
    public List<Department> departmentList() {
        return departmentDao.departmentList();
    }

    @Override
    public Department getDepartmentById(Integer deptId) throws Exception {
        Department department=departmentDao.getDepartmentById(deptId);
        if (department==null) throw new Exception("no such Department");
        return department;
    }

    @Override
    public Department getParentById(Integer deptId) throws Exception {
        Department department=departmentDao.getDepartmentById(deptId);
        if (department==null) throw new Exception("no such department");
        Department parentDepartment=departmentDao.getDepartmentById(deptId);
        if (parentDepartment==null) throw new Exception("no parent department");
        return parentDepartment;
    }

    @Override
    public List<Department> getChildrenListById(Integer deptId) {
        return departmentDao.getChildrenListById(deptId);
    }

    @Override
    public Integer getParentIdById(Integer deptId) {
        return departmentDao.getParentIdById(deptId);
    }


}
