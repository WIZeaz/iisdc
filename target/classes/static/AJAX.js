function AJAX(method,url,smsg,fmsg,data){
    $.ajax({
        //请求方式
        type : method,
        //请求的媒体类型
        contentType: "application/json;charset=UTF-8",
        //请求地址
        url : url,
        //数据，json字符串
        data : JSON.stringify(data),
        //请求成功
        success : function(result) {
            let msg;
            if (result.success===true) msg=smsg;
            else msg=fmsg;
            layui.use(['layer', 'form'], function(){
                let layer = layui.layer,form = layui.form;
                layer.msg(msg);
            });
        },
        //请求失败，包含具体的错误信息
        error : function(e){
            console.log(e.status);
            console.log(e.responseText);
        },
    });
}
