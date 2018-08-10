var express = require("express");
var bodyParser = require('body-parser');
var multer = require('multer');

//创建express实例
var app=express();

//接收post请求
var urlencodedParse=bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());

app.use(multer({dest: "/tmp/"}).array("myFile"));

//设置静态资源
app.use(express.static("./public"));
app.use(express.static("./view"));

var router=require("./routes");
//console.log("router:",router);
//路由
router(app,__dirname);



app.listen(80,function(){
	console.log("OK 80");
})
