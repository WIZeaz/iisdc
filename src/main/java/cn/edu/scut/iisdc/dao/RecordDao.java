package cn.edu.scut.iisdc.dao;

import cn.edu.scut.iisdc.entity.Record;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface RecordDao {
    @Select("select * from record where document_id=#{documentId}")
    List<Record> getRecordByDocumentId(Integer documentId);

    @Select("select document_id from record where record_id=#{id}")
    Integer getDocumentIdById(Integer id);

    @Select("select * from record where record_id=#{id}")
    Record getRecordById(Integer id);

    @Delete("delete from record where record_id=#{id}")
    void deleteRecordId(Integer id);

    @Insert("insert into record(document_id,status,`desc`,create_time) values (#{documentId},#{status},#{desc},#{createTime})")
    void addRecord(Record record);


}
