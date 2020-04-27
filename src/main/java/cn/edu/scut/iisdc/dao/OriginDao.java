package cn.edu.scut.iisdc.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface OriginDao {
    @Select("SELECT * FROM origin")
    List<String> OriginList();
}
