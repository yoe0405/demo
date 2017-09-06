var express=require('express');
var bodyParser=require('body-parser');  // 用来解析请求的body，用post请求的时候数据是以一定的格式编码的，用这个进行解码，形成json数据供我们使用
var user=require('./routes/user.js')

var app=express();

// 用户路由
app.use('user', user());

// app.all('/user',function(req,res){
//     res.send('hello');
// })




// app.use('/user', user);

// json类型body
app.use(bodyParser.json());  // 如果当前的请求是posrt的请求，并类型是json 就进行解析还原成我们需要的数据类型
// query string类型body
app.use(bodyParser.urlencoded({
    extended: false
}));

// 静态文件目录
app.use(express.static(__dirname+'/static'));

// 路由与业务逻辑
// app.get('/',function(req,res){
//     res.send('hello');
// })


// module.exports = app;

app.listen(8033);
