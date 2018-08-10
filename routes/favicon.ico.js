module.exports=function(app,dirname){
	app.get("/favicon.ico",function(req,res){
		res.sendFile(dirname+"/public/logo/favicon.ico");
	});
}
