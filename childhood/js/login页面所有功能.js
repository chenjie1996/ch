window.onload=function(){
function randomNum(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }
        //生成随机颜色RGB分量
    function randomColor(min,max){
        var _r = randomNum(min,max);
        var _g = randomNum(min,max);
        var _b = randomNum(min,max);
        return "rgb("+_r+","+_g+","+_b+")";
    }
    //先阻止画布默认点击发生的行为再执行drawPic()方法
    document.getElementById("canvas").onclick = function(e){
        e.preventDefault();
        drawPic();
    };
    function drawPic(){
        //获取到元素canvas
        var $canvas = document.getElementById("canvas");
        var _str = "0123456789";//设置随机数库
        var _picTxt = "";//随机数
        var _num = 4;//4个随机数字
        var _width = $canvas.width;
        var _height = $canvas.height;
        var ctx = $canvas.getContext("2d");//获取 context 对象
        ctx.textBaseline = "bottom";//文字上下对齐方式--底部对齐
        ctx.fillStyle = randomColor(180,240);//填充画布颜色
        ctx.fillRect(0,0,_width,_height);//填充矩形--画画
        for(var i=0; i<_num; i++){
            var x = (_width-10)/_num*i+10;
            var y = randomNum(_height/2,_height);
            var deg = randomNum(-45,45);
            var txt = _str[randomNum(0,_str.length)];
            _picTxt += txt;//获取一个随机数
            ctx.fillStyle = randomColor(10,100);//填充随机颜色
            ctx.font = randomNum(16,40)+"px SimHei";//设置随机数大小，字体为SimHei
            ctx.translate(x,y);//将当前xy坐标作为原始坐标
            ctx.rotate(deg*Math.PI/180);//旋转随机角度
            ctx.fillText(txt, 0,0);//绘制填色的文本
            ctx.rotate(-deg*Math.PI/180);
            ctx.translate(-x,-y);
        }
        for(var i=0; i<_num; i++){
            //定义笔触颜色
            ctx.strokeStyle = randomColor(90,180);
            ctx.beginPath();
            //随机划线--4条路径
            ctx.moveTo(randomNum(0,_width), randomNum(0,_height));
            ctx.lineTo(randomNum(0,_width), randomNum(0,_height));
            ctx.stroke();
        }
        for(var i=0; i<_num*10; i++){
            ctx.fillStyle = randomColor(0,255);
            ctx.beginPath();
            //随机画原，填充颜色
            ctx.arc(randomNum(0,_width),randomNum(0,_height), 1, 0, 2*Math.PI);
            ctx.fill();
        }
        //登录按钮验证码验证
    	var dl=document.getElementById("dl");
        var yzm=document.getElementById("yzm");
        var warm3=document.getElementById("warm3");
        var _picTxt;
        var t1=document.getElementById("t1");
        var warm1=document.getElementById("warm1");
        var t2=document.getElementById("t2");
        var warm2=document.getElementById("warm2");
            
        dl.onclick=function(){
        	if(yzm.value==_picTxt){
        		console.log("成功");
//      		alert(yzm.value);
//      		alert(_picTxt)
        		warm3.style.display="none";
        	}else{
        		console.log("失败");
//      		alert(yzm.value);
        		warm3.style.display="block";
        	}
        	    //账户验证
        	    if(t1.value=="1061047244"){
                	warm1.style.display="none";
                }else{
                	warm1.style.display="block";
                }
                //密码验证
                if(t2.value=="12345678"){
                	warm2.style.display="none";
                }else{
                	warm2.style.display="block";
                }
            //用jq写用户登录验证是否成功，成功则登录不成功无法进入页面
            $("#delayed").click(function(){
              	if (yzm.value==_picTxt&&t1.value=="1061047244"&&t2.value=="12345678") {
          		setTimeout(function(){
						location.href = "../index.html";
				},2000);
              	} else{
              		
              	}
            });
        return _picTxt;//返回随机数字符串
      }
    }
    drawPic();
    //上面都是验证码功能
    
    //登录按钮变色功能
    var dl=document.getElementById("dl");
    var hole=document.getElementById("hole");
				dl.onmousedown=function(){
					dl.style.backgroundColor="#00008B";
					hole.style.display="block";
				}
				dl.onmouseup=function(){
					dl.style.backgroundColor="blue";
				}
    }