package cn.edu.scut.iisdc.service;

import cn.edu.scut.iisdc.entity.Record;

import java.util.List;

public interface RecordService {
    List<Record> getRecordByDocumentId(Integer documentId);
    Integer getDocumentIdById(Integer id);
    void addRecord(Integer deptId,Record record);
    void deleteRecordById(Integer recordId) throws Exception;
    List<Record> getLastNDayRecord(long n);
}
