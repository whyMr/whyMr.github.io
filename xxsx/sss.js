 function diaoYong(yuanSu,muBiao){

          clearInterval(yuanSu.timeId);
          yuanSu.timeId=setInterval(function(){
               var weiZhi=yuanSu.offsetLeft;
               var yiDOng=200;
               yiDOng=weiZhi<muBiao?yiDOng:-yiDOng;
               weiZhi+=yiDOng;
               if(Math.abs(muBiao - weiZhi)>Math.abs(yiDOng)){
                    yuanSu.style.left=weiZhi+"px";
               }
               else{
                    clearInterval(yuanSu.timeId);
                    yuanSu.style.left=muBiao+"px";
               }

          },30)
     }
  