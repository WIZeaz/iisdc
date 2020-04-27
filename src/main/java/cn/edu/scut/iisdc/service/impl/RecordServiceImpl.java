package cn.edu.scut.iisdc.service.impl;

import cn.edu.scut.iisdc.annotation.Authority;
import cn.edu.scut.iisdc.dao.RecordDao;
import cn.edu.scut.iisdc.entity.Record;
import cn.edu.scut.iisdc.service.RecordService;
import cn.edu.scut.iisdc.type.AuthType;
import cn.edu.scut.iisdc.type.IdType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class RecordServiceImpl implements RecordService {
    @Autowired
    RecordDao recordDao;

    @Authority(idType=IdType.documentId)
    @Override
    public List<Record> getRecordByDocumentId(Integer documentId) {
        return recordDao.getRecordByDocumentId(documentId);
    }


    @Override
    @Authority(idType=IdType.documentId)
    public Integer getDocumentIdById(Integer id) {
        return recordDao.getDocumentIdById(id);
    }

    @Override
    @Authority(authType = AuthType.manageuser,idType = IdType.deptId)
    public void addRecord(Integer deptId,Record record) {
        Date date=new Date();
        record.setCreateTime(date);
        recordDao.addRecord(record);
    }

    @Override
    @Authority(authType = AuthType.manageuser,idType = IdType.recordId)
    public void deleteRecordById(Integer recordId) throws Exception {
        if (recordDao.getRecordById(recordId)==null) throw new Exception("no such record");
        recordDao.deleteRecordId(recordId);
    }
}
