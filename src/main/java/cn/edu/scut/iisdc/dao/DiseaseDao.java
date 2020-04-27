package cn.edu.scut.iisdc.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
@Mapper
public interface DiseaseDao {
    @Select("SELECT * FROM disease")
    List<String> diseaseList();
}
