package cn.edu.scut.iisdc;

import cn.edu.scut.iisdc.service.TokenService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class IisdcApplicationTests {

    @Autowired
    TokenService tokenService;


    @Test
    void contextLoads() {
        System.out.println(tokenService.authorizeOperation(2,3));
        System.out.println(tokenService.authorizeOperation(3,2));
        System.out.println(tokenService.authorizeOperation(2,1));

    }

}
