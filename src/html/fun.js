		function getParam() 
		{ 
			var strParamValue="";
			var urlInfo=window.location.href; //��ȡ��ǰҳ���url 
			//alert(urlInfo); 
			Len=urlInfo.length; //��ȡurl�ĳ��� 
			offset=urlInfo.indexOf("?"); //���ò����ַ�����ʼ��λ�� 
			if(offset==-1)
				return strParamValue;
			strKeyValue=urlInfo.substring(offset,Len); //ȡ�������ַ��� ����������ơ�id=1���������ַ��� 
			arrParam=strKeyValue.split("="); //�Ի�õĲ����ַ������ա�=�����зָ� 
			if(arrParam.length>1){
				strParamValue=arrParam[1]; //�õ�����ֵ 
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
" 		�����������֧�� "+
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