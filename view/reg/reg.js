//前台reg.html的js
$(function(){
	$("#reg").click(function(){
		$("#prompt").html("");
		var phoneV=$("#phone").val();
		var file=$("#file")[0].files[0];//获取头像
		var pwd1V=$("#pwd1").val();
		var pwd2V=$("#pwd2").val();
		if(!phoneV){
			$("#prompt").html("手机号不能为空");
			return;
		}
		if(!file){
			$("#prompt").html("头像不能为空");
			return;
		}
		if(!pwd1V){
			$("#prompt").html("密码不能为空");
			return;
		}
		if(!pwd2V){
			$("#prompt").html("确认密码不能为空");
			return;
		}
		
		if(pwd1V!=pwd2V){
			$("#prompt").html("两次密码不一致");
			return;
		}
		var data=new FormData();
		data.append("phone",phoneV);
		data.append("myFile",file);
		data.append("pwd",pwd1V);
		$.ajax({
			url:"/regAddPost",
			type:"post",
			async:true,
			data:data,
			contentType:false,//不可缺
			processData:false,//不可缺
			success:function(data){
				console.log("data:",data);
				if(data.msg!=0){
					$("#prompt").html("注册失败!");
				}
			},
			error:function(){
				//console.log("注册失败!");
				$("#prompt").html("注册失败!");
			}
		});
		
	});
});
