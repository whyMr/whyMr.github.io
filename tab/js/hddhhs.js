function dongHua2(elsement,muBiao){//首先传入两个参数  一个是元素，一个目标
	   	    clearInterval(elsement.inme)
			elsement.inme=setInterval(function(){
			//首先获取元素的当前位置
			var dangQian=elsement.offsetLeft;
			//在设置这个元素的移动步数 目标减去当前/10 就是要走的步数缓动效果
			var yiDong=(muBiao-dangQian)/10;
			//判断要走的步数是否大于0 如果大于零向上取整，如果小于零向下取整
			yiDong=dangQian>0?Math.ceil(yiDong):Math.floor(yiDong);
			//让元素移动10步动起来
			dangQian+=yiDong;
			elsement.style.left=dangQian+"px";
			if(dangQian==muBiao){
				clearInterva(element.inme)
			}
			},20)
		};
