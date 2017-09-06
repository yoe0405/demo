var express=require('express');
var router=express.Router();

router.all('/list',function(req,res){

    console.log(req.method);  // 以什么方式提交 post,get
    console.log(req.baseUrl);  // 请求地址的头部 /user
    console.log(req.path);  // 请求地址的具体 /list

    console.log(req.headers['user-agent']); // 获取头部信息
    console.log(req.get('user-agent'));

    console.log(req.query);  // 对url里面的参数进行解析后的json对象
    console.log(req.query.id);

    console.log(req.body); // post 请求数据在req.body里面解析城json对象
    console.log(req.body.id);

    res.send('hello');
});
