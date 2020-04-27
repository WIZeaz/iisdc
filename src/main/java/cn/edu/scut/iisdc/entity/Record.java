package cn.edu.scut.iisdc.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Record {
    private Integer recordId;
    private Integer documentId;
    private String status;
    private String desc;
    private Date createTime;
}
