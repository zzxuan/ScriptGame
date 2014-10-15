		function getParam() 
		{ 
			var strParamValue="";
			var urlInfo=window.location.href; //获取当前页面的url 
			//alert(urlInfo); 
			Len=urlInfo.length; //获取url的长度 
			offset=urlInfo.indexOf("?"); //设置参数字符串开始的位置 
			if(offset==-1)
				return strParamValue;
			strKeyValue=urlInfo.substring(offset,Len); //取出参数字符串 这里会获得类似“id=1”这样的字符串 
			arrParam=strKeyValue.split("="); //对获得的参数字符串按照“=”进行分割 
			if(arrParam.length>1){
				strParamValue=arrParam[1]; //得到参数值 
				var reg = /^%/;
				if(reg.test(strParamValue))
					strParamValue=decodeURI(strParamValue);
				}
			return strParamValue;
		}
		
					function action(ss,ret){
					document.write(
" <br> "+
" 	<canvas id = 'mycanvas' width=\"500\" height=\"500\"> "+
" 		您的浏览器不支持 "+
" 	</canvas> "+
" 	<script \"type=text/javascript\"> "+
//" 		ctx=document.getElementById(\"mycanvas\").getContext(\"2d\"); "+
" 			function expscriptfun(){ "+
ss+
" 			 "+
" 		} "+
"init();"+
" 		draw(); "+
" 		var timer=setInterval(function(){ "+
" 			clear(); "+
" 			expscriptfun(); "+
" 			if(isdead()){ "+
" 				clearInterval(timer); "+
"				alert('GAME OVER');"+
"				window.location.href='"+ret+"';"+
" 			} "+
" 			movesnake(); "+
" 			draw(); "+
" 		},25); "+
" 	</script> "+
" </br> "
	);
			}