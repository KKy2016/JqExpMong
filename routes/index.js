module.exports=function(app,dirname){
	require("./logo")(app,dirname);
	require("./jq")(app,dirname);
	require("./login")(app,dirname);
	require("./reg")(app,dirname);
}
