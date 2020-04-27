package cn.edu.scut.iisdc.controller;

import cn.edu.scut.iisdc.entity.Department;
import cn.edu.scut.iisdc.entity.Document;
import cn.edu.scut.iisdc.service.DepartmentService;
import cn.edu.scut.iisdc.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class DepartmentController {

    @Autowired
    DepartmentService departmentService;

    @Autowired
    DocumentService documentService;

    @RequestMapping(value = "/department",method = RequestMethod.GET)
    public HashMap<String,Object> documentList(){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            List<Department> departments=departmentService.departmentList();
            resultMap.put("departments",departments);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/department/{id}",method = RequestMethod.GET)
    public HashMap<String,Object> getDepartment(@PathVariable("id") Integer deptId){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            Department department=departmentService.getDepartmentById(deptId);
            resultMap.put("department",department);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }

    @RequestMapping(value = "/department/{id}/document",method = RequestMethod.GET)
    public HashMap<String,Object> getAllDocument(@PathVariable("id") Integer deptId){
        HashMap<String,Object> resultMap=new HashMap<>();
        try{
            List<Document> documents=documentService.getDocumentByDeptId(deptId);
            resultMap.put("documents",documents);
            resultMap.put("success",true);
        } catch (Exception e){
            resultMap.put("success",false);
            resultMap.put("message",e.toString());
        }
        return resultMap;
    }



}
