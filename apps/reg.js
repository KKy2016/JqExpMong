//后台业务
var getTime=require("../modules/getTime");
var fs=require("fs");


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
						console.log("添加成功,要给数据库的数据是",obj);
						res.send({msg:0})
					}
				})
			}
		})
	}
