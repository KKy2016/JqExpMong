module.exports=function(app,dirname){
	require("./favicon.ico")(app,dirname);
	require("./jq")(app,dirname);
	require("./login")(app,dirname);
	require("./manage")(app,dirname);
	require("./reg")(app,dirname);
}
