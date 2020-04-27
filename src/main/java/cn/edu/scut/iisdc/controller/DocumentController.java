package cn.edu.scut.iisdc.controller;

import cn.edu.scut.iisdc.annotation.Authority;
import cn.edu.scut.iisdc.entity.Document;
import cn.edu.scut.iisdc.entity.Record;
import cn.edu.scut.iisdc.service.DocumentService;
import cn.edu.scut.iisdc.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class DocumentController {

    @Autowired
    DocumentService documentService;

    @Autowired
    RecordService recordService;

    @RequestMapping(value = "/document/{id}",method = {RequestMethod.GET})
    public HashMap<String,Object> documentList(@PathVariable("id") Integer documentId){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            Document document=documentService.getDocumentById(documentId);
            resultMap.put("document",document);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping("/document")
    public HashMap<String,Object> documentList(){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            List<Document> documents=documentService.documentList();
            resultMap.put("documents",documents);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/document/{id}",method = RequestMethod.DELETE)
    public HashMap<String,Object> deleteDocument(@PathVariable("id") Integer documentId){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            documentService.deleteDocumentById(documentId);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }
    @RequestMapping(value = "/document",method = RequestMethod.POST)
    public HashMap<String,Object> addDocument(@RequestParam HashMap<String,Object> params){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            Document document=new Document();
            document.setDeptId(Integer.valueOf((String) params.get("deptId")));
            document.setDiseaseName((String) params.get("diseaseName"));
            document.setPatientId((String)params.get("patientId"));
            document.setUserId((String)params.get("userId"));
            documentService.addDocument(document);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }


    @RequestMapping(value = "/document/{id}/record",method = RequestMethod.GET)
    public HashMap<String,Object> record(@PathVariable("id") Integer documentId){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            List<Record> records=recordService.getRecordByDocumentId(documentId);
            resultMap.put("records",records);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }
}
