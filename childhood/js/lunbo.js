//轮播
$(function(){
		var i= 0;
	$(".back").eq(0).css("opacity","1");
	setInterval(function(){
		i++;
		if(i==$(".back").length){
			i = 0;
		}
		$(".back").css("z-index",1);
		$(".back").eq(i).css("z-index",99);
		$(".back").eq(i).animate({
			opacity:1
		},1000,function(){
			$(".back").not($(".back").eq(i)).css("opacity",0);
		})	
	},4000)
})