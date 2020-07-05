package cn.edu.scut.iisdc.config;

import org.apache.ibatis.javassist.Loader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.text.SimpleDateFormat;

@Configuration
public class DateFormatConfig {

    @Bean
    SimpleDateFormat initFormatter(){
        return new SimpleDateFormat("yyyy-MM-dd");
    }
}
