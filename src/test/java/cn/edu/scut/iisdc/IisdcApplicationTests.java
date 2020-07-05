package cn.edu.scut.iisdc;

import cn.edu.scut.iisdc.entity.Record;
import cn.edu.scut.iisdc.service.RecordService;
import cn.edu.scut.iisdc.service.TokenService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
class IisdcApplicationTests {

    @Autowired
    RecordService recordService;

    @Test
    void contextLoads() {
        List<Record> recordList=recordService.getLastNDayRecord(3);
        System.out.println(recordList);
    }

}
