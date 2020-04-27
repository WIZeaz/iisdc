package cn.edu.scut.iisdc.controller;

import cn.edu.scut.iisdc.dao.OriginDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OriginController {

    @Autowired
    OriginDao originDao;

    @RequestMapping("/origin")
    public List<String> originList(){
        return originDao.OriginList();
    }
}
