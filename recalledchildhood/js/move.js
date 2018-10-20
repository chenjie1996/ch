function getStyleAttr(obj, attr) {
	if(window.getComputedStyle) { //支持IE9+, 谷歌, 火狐..获取页面元素样式
	return getComputedStyle(obj, null)[attr];
	//var style = window.getComputedStyle("元素", "伪类");
	}else{
		return obj.currentStyle[attr]; //支持IE8-
    }
}
//obj 对象
//attr 属性
//target 目标值
//s 定时器s毫秒秒执行一次
//fn() 回调函数
function startMove(obj,attr,target,s,fn){
	clearInterval(obj.timer);
	if(attr=="opacity"){
		target = target*100;
	}else{
		target = target ; 
	}
	obj.timer = setInterval(function(){
		//目标值
		//获取初始位置
		if(attr=="opacity"){
			var start = parseFloat(getStyleAttr(obj,attr)*100);
		}else{
			var start = parseInt(getStyleAttr(obj,attr));
		}
		//给一个速度
		var speed = (target-start)/5 ;		
		speed = speed>0?Math.ceil(speed):Math.floor(speed);//向上取整；向下取整
		if(start==target){
			//停止
			clearInterval(obj.timer);
			//回调
			if(fn){
				fn();
			}
		}else{
			//开始运动
			if(attr=="opacity"){
				obj.style[attr] = (start+speed)/100;
				obj.style.fiter = "alpha(opacity = ("+start+speed+"))";
			}else{
				obj.style[attr] = start+speed+"px";
			}
		}
	},s)
}
