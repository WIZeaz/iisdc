package cn.edu.scut.iisdc.dao;

import cn.edu.scut.iisdc.entity.Document;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface DocumentDao {
    @Select("Select * from document")
    List<Document> documentList();

    @Select("Select * from document where dept_id=#{deptId}")
    List<Document> getDocumentByDeptId(Integer deptId);

    @Select("Select * from document where document_id=#{id}")
    Document getDocumentById(Integer id);

    @Insert("insert into document(patient_id,user_id,dept_id,disease_name,create_time,modify_time)" +
            " values (#{patientId},#{userId},#{deptId},#{diseaseName},#{createTime},#{modifyTime})")
    void addDocument(Document document);

    @Update("update document set patient_id=#{patientId},disease_name=#{diseaseName},modify_time=#{modifyTime}")
    void updateDocument(Document document);

    @Delete("delete from document where document_id=#{id}")
    void deleteDocumentById(Integer id);

    @Select("select * from document where user_id=#{id}")
    List<Document> getDocumentByUserId(String id);
}
