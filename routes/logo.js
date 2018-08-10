module.exports=function(app,dirname){
	app.get("/logo",function(req,res){
		res.sendFile(dirname+"/public/logo/favicon.ico");
	});
}
