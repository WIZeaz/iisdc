package cn.edu.scut.iisdc.service;

import cn.edu.scut.iisdc.entity.Document;
import cn.edu.scut.iisdc.entity.Record;

import java.util.List;

public interface DocumentService {
    Document getDocumentById(Integer id) throws Exception;
    List<Document> documentList();
    List<Document> getDocumentByDeptId(Integer deptId);
    void addDocument(Document document);
    void deleteDocumentById(Integer documentId) throws Exception;
    List<Document> getDocumentByUserId(String userId);
    List<Document> getLastNDayDocument(long n);

}
