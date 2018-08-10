module.exports=function(app,dirname){
	app.get("/jq",function(req,res){
		res.sendFile(dirname+"/public/js/jquery-1.11.3.min.js");
	});
}
