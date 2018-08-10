//后台reg路由
var reg=require("../apps/reg");

module.exports=function(app,dirname){
	app.get("/reg",function(req,res){
		res.sendFile(dirname+"/view/reg/reg.html");
	});
	/*app.post("/regAddPost",function(req,res){
		var obj=req.body;
		var file=req.files[0];
		console.log("regAddPost obj:",obj,"file:",file);
		res.send("通了");
	});*/
	
	app.post("/regAddPost",reg.regAddPost);
}
