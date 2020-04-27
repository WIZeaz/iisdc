package cn.edu.scut.iisdc.entity;

import lombok.Data;

import java.util.Date;

@Data
public class User {
    private String userId;
    private Integer deptId;
    private String password;
    private String name;
    private String gender;
    private String originName;
    private String group;
}
