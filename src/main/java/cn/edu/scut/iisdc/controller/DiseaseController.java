package cn.edu.scut.iisdc.controller;

import cn.edu.scut.iisdc.dao.DiseaseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DiseaseController {

    @Autowired
    DiseaseDao diseaseDao;

    @RequestMapping("/disease")
    public List<String> diseaseList(){
        return diseaseDao.diseaseList();
    }
}
