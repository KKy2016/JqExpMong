//后台业务
var getTime=require("../modules/getTime");
var fs=require("fs");
var db=require("../modules/db");

module.exports.regAddPost=function(req,res){
		var obj=req.body;
		var file=req.files[0];
		//console.log("regAddPost obj:",obj,"file:",file);
		var id=getTime.getTime();
		//console.log("id:",id);
		var imgName=id+"_"+file.originalname;
		/*
		 originalname: '01.jpg',
		 lastIndexOf(.)
		 * */
		//res.send("通了");
		var destFile="./public/upload/"+imgName;
		fs.readFile(file.path,function(err,data){
			if(err){
				console.log("读取文件失败",err);
				res.send({msg:1});
			}else{
				fs.writeFile(destFile,data,function(err){
					if(err){
						console.log("写入文件失败",err);
						res.send({msg:2});
					}else{
						obj.img=imgName;
						obj.time=id+"";
						console.log("添加成功,要给数据库的数据是",obj);
						db.insert(res,"reg",obj,function(err,result,db){
							if(err){
								console.log("添加失败");
								db.close();
								res.send({msg:4});
							}else{
								console.log("添加成功");
								db.close();
								res.send({msg:0});
								//res.redirect(200,"/manage");
							}
						});
					}
				})
			}
		})
	}
