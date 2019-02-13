function my$(id){//返回id值元素
	return document.getElementById(id)
};
 //为事件绑定事件兼容代码  需要三个参数  任意的元素  	事件的类型     事件处理函数 
    function addEventListener(element,type,fn){
    };
  //动画函数的封装   直接调用dongHua(元素,目标) my$("btn1").onclick=function(){dongHua(my$("dv"),400)}
	
  //
	 function dongHua(yuansu,mubiao){//动画函数
	 	clearInterval(yuansu.timeid)//先清理一个定时器
		yuansu.timeid=setInterval(function(){
			var dangq=yuansu.offsetLeft;//获取当前这个div的距离
			var yid=100; //每次要移动的步数
			yid=dangq<mubiao?yid:-yid;
			 dangq+=yid; //移动后的步数
			if(Math.abs(mubiao-dangq)>Math.abs(yid)){ //判断如果我的目标减去当前位置大于步数 我要接着走
				yuansu.style.left=dangq+"px";
			}else{
				clearInterval(yuansu.timeid);//当他等于800的时候清理定时器
				yuansu.style.left=mubiao+"px"; //否则就直接到达目标
			}
		},10)
	};

	function dingshi1(x){//悟空八戒动画函数
		var inner=x.children[0];
		var ulobj=inner.children[0];
		var imgwidth=inner.offsetWidth;
	var inne=0;
	setInterval(function(){
		inne-=200;
		if(inne==-1600){
			ulobj.style.left=0+"px";
			inne=0;
		}
		ulobj.style.left=inne+"px";
	},150)
	};



	function dingshi2(x){//师傅动画函数动画函数
		var inner=x.children[0];
		var ulobj=inner.children[0];
		var imgwidth=inner.offsetWidth;
	var inne=0;
	setInterval(function(){
		inne-=170;
		if(inne==-1360){
			ulobj.style.left=0+"px";
			inne=0;
		}
		ulobj.style.left=inne+"px";
	},150)
	};


	function dingshi3(x){//沙和尚动画函数
		var inner=x.children[0];
		var ulobj=inner.children[0];
		var imgwidth=inner.offsetWidth;
	var inne=0;
	setInterval(function(){
		inne-=210;
		if(inne==-1680){
			ulobj.style.left=0+"px";
			inne=0;
		}
		ulobj.style.left=inne+"px";
	},150)
	};