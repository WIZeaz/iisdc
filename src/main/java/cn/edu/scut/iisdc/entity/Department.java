package cn.edu.scut.iisdc.entity;

import lombok.Data;

@Data
public class Department {
    private Integer deptId;
    private String name;
    private Integer parentId;
}
