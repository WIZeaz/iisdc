package cn.edu.scut.iisdc.service.impl;

import cn.edu.scut.iisdc.annotation.Authority;
import cn.edu.scut.iisdc.dao.DocumentDao;
import cn.edu.scut.iisdc.entity.Document;
import cn.edu.scut.iisdc.service.DocumentService;
import cn.edu.scut.iisdc.type.AuthType;
import cn.edu.scut.iisdc.type.IdType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DocumentServiceImpl implements DocumentService {
    @Autowired
    DocumentDao documentDao;

    @Authority(idType = IdType.documentId)
    @Override
    public Document getDocumentById(Integer id) throws Exception {
        Document document=documentDao.getDocumentById(id);
        if (document==null) throw new Exception("no such document");
        return document;
    }

    @Override
    @Authority(authType=AuthType.superuser)
    public List<Document> documentList() {
        List<Document> documents=documentDao.documentList();
        return documents;
    }

    @Override
    @Authority(authType = AuthType.manageuser,idType = IdType.deptId)
    public List<Document> getDocumentByDeptId(Integer deptId) {
        List<Document> documents=documentDao.getDocumentByDeptId(deptId);
        return documents;
    }

    @Override
    @Authority(authType = AuthType.manageuser,idType = IdType.entity)
    public void addDocument(Document document) {
        Date date= new Date();
        document.setCreateTime(date);
        document.setModifyTime(date);
        documentDao.addDocument(document);
    }

    @Override
    @Authority(authType = AuthType.manageuser,idType = IdType.documentId)
    public void deleteDocumentById(Integer documentId) throws Exception {
        Document document = documentDao.getDocumentById(documentId);
        if (document==null) throw new Exception("no such document");
        documentDao.deleteDocumentById(documentId);
    }

    @Override
    public List<Document> getDocumentByUserId(String userId) {
        return documentDao.getDocumentByUserId(userId);
    }

}
