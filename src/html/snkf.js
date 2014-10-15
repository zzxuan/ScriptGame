		var ctx;
		var unit=10;
		var width=50;
		var height=50;
		
		var snakes = new Array();
		var fx=0;
		var fy=0;
		var dir=2;
		
		var dicarr = new Array(); //用户字典

		
		function clear(){
			ctx.fillStyle = "#2e3a1f";
			ctx.fillRect(0,0,width*unit,height*unit);
		}
		function drawrect(x,y,color){
			ctx.fillStyle = color;
			ctx.fillRect(x*unit,y*unit,unit,unit);
		}
		function init(){
			ctx=document.getElementById("mycanvas").getContext("2d");
			clear();
			for(i=0;i<6;i++){
				snakes[i]={x:i+30,y:30};
			}
			creatfood();
		}
		function draw(){
			for(i=0;i<snakes.length;i++){
				drawrect(snakes[i].x,snakes[i].y,"#2a5caa");
			}
			drawrect(fx,fy,"#ffd400");
		}
		//判断蛇身是否包含某个点
		function containsxy( x, y){
			for(var i=0;i<snakes.length;i++){
				if(snakes[i].x==x&&snakes[i].y==y)
					return true;
			}
			return false;
		}
		//随机生成食物
		function creatfood(){
			var n=width*height-snakes.length;//除了蛇身以外的方格数
			var fn=parseInt(Math.random()*n);
			var num=0;
			for(var j=0;j<height;j++){
				for(var i=0;i<width;i++){
					if(!containsxy(i,j)){
						num++;
						if(num==fn){
							fx=i;
							fy=j;
							return;
						}
					}
				}
			}
		}
		
		function getnextpt(){
			var hx=snakes[0].x;
			var hy=snakes[0].y;
			var nx;
			var ny;
			switch(dir){
				case 0://上
					nx=hx;
					ny=hy-1;
					break;
				case 1://下
					nx=hx;
					ny=hy+1;
					break;
				case 2://左
					nx=hx-1;
					ny=hy;
					break;
				case 3://右
					nx=hx+1;
					ny=hy;
					break;
			}
			var next={x:nx,y:ny};
			return next;
		}
		function movesnake(){
			var next=getnextpt();
			if((next.x==fx&&next.y==fy)){//是否是食物
				creatfood();
			}
			else{
				snakes.pop();
			}
			snakes.unshift(next);
		}
		function isdead(){
			var next=getnextpt();
			if(next.x>=width||next.x<0||
			next.y>=height||next.y<0)
				return true;
			if(containsxy(next.x,next.y))
				return true;
			return false;
		}
		//---定义外部接口--------------------
		function toup(){
			if(dir!=1)
				dir=0;
		}
		function todown(){
			if(dir!=0)
				dir=1;
		}
		function toleft(){
			if(dir!=3)
				dir=2;
		}
		function toright(){
			if(dir!=2)
				dir=3;
		}
		function getfood(){
			var f={x:fx,y:fy};
			return f;
		}
		function getsnake(){
			var snk=new Array();
			for(var i=0;i<snakes.length;i++){
				snk[i]={x:snakes[i].x,y:snakes[i].y};
			}
			return snk;
		}
		function getwidth(){
			return width;
		}
		function getheight(){
			return height;
		}
		function direction(){
			return dir;
		}
		function getdic(){
			return dicarr;
		}
		//-----------------------

