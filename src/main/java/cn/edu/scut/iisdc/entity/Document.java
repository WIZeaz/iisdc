package cn.edu.scut.iisdc.entity;

import lombok.Data;
import lombok.Getter;

import java.util.Date;

@Data
public class Document {
    @Getter
    private Integer documentId;
    private Integer deptId;
    private String userId;
    private String patientId;
    private String diseaseName;
    private Date createTime;
    private Date modifyTime;

}
