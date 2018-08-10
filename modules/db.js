var mongodb = require("mongodb");
var MongoClient=mongodb.MongoClient;////1.创建MongoClient对象,用来连接数据
var dbUrl="mongodb://localhost:27017";//数据库地址
var myDB="mydb1804";

	function connectMGDB(res,cb){
		MongoClient.connect(dbUrl,{useNewUrlParser: true},function(err,db){
			if(err){
				console.log("连接数据库失败!",err);
				res.send({msg:3});
				db.close();
			}else{
				var dbase=db.db(myDB);
				cb(dbase,db)
			}
		})
	}

	module.exports.insert=function(res,cName,obj,cb){
		connectMGDB(res,function(dbase,db){
			dbase.collection(cName).insert(obj,function(err,result){
				cb(err,result,db);
			})
		});
	}



/*
module.exports.insert=function(res,cName,obj){
	connectMGDB(res,function(dbase,db){
		dbase.collection(cName).insert(obj,function(err,result){
			if(err){
				console.log("添加失败");
				res.send({msg:4});
			}else{
				console.log("添加成功");
				db.close();
				res.send({msg:0});
			}
		})
	});
}
*/


/*module.exports.insert=function(obj){
	//关联数据库工具
	console.log("引入了db.js");

	//关联数据库工具
	MongoClient.connect(dbUrl,{useNewUrlParser: true},function(err,db2){
		//判断是否连接成功
		if(err){
			console.log("err:",err);
		}else{
			console.log("连接成功");
			
			//关联数据库
			var dbase=db2.db("mydb1804");
			
			//创建数据
			//插入数据
			dbase.collection("reg").insert(obj,function(err,result){
				if(err){
					console.log("添加失败");
				}else{
					console.log("添加成功",result.result);
					db2.close();
				}
			})
		}
	})

}*/
