package cn.edu.scut.iisdc.annotation;

import cn.edu.scut.iisdc.type.AuthType;
import cn.edu.scut.iisdc.type.IdType;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Documented
public @interface Authority{
    AuthType authType() default AuthType.manageuser;
    IdType idType() default  IdType.deptId;
    int index() default 0;
}
