module.exports=function(app,dirname){
	app.get("/manage",function(req,res){
		res.sendFile(dirname+"/view/manage/manage.html");
	});
}
