package cn.edu.scut.iisdc.controller;

import cn.edu.scut.iisdc.entity.Document;
import cn.edu.scut.iisdc.entity.Record;
import cn.edu.scut.iisdc.service.DocumentService;
import cn.edu.scut.iisdc.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
public class RecordController {
    @Autowired
    RecordService recordService;

    @Autowired
    DocumentService documentService;

    @RequestMapping(value = "/record",method = RequestMethod.POST)
    public HashMap<String,Object> addRecord(@RequestParam HashMap<String,Object> params){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            Record record=new Record();
            Integer documentId=Integer.valueOf((String)params.get("documentId"));
            Document document=documentService.getDocumentById(documentId);

            record.setDocumentId(documentId);
            record.setStatus((String)params.get("status"));
            record.setDesc((String)params.get("desc"));
            
            recordService.addRecord(document.getDeptId(),record);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/record/{id}",method = RequestMethod.DELETE)
    public HashMap<String,Object> deleteDocument(@PathVariable("id") Integer recordId){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            recordService.deleteRecordById(recordId);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/record",method = RequestMethod.GET)
    public HashMap<String,Object> getRecordsByDate(@RequestParam HashMap<String,Object> params){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            Record record=new Record();
            Integer days=Integer.valueOf((String)params.get("days"));
            resultMap.put("records",recordService.getLastNDayRecord(days));
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }
}
