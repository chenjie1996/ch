$(function(){
            var imgL = $('#wrap img').size();
            //获取当前的img长度
            console.log($('#wrap img').size());
            var Deg = 360 / imgL; 
            //  360/imgL的角度有关系
            var roY = 0;
            var roX = -10;
            xN=null;
            yN=null;
            play=null;
            //挨个赋值

            $('#wrap img').each(function(i) {
            //遍历 $('#wrap img')改变他们的css样式
                $(this).css('transform', 'rotateY('+ i*Deg +'deg) translateZ(350px)')
                .attr('ondragstart','return false');
                //旋转以及禁止拖拽复制
            });

           $(document).mousedown(function(ev){
            //绑定事件鼠标按下时触发的时间
                clearInterval( play );
                //关闭计时器(play)
                //获取当前鼠标在浏览器页面的x(y)方向的位置 保存在变量 x_(y_)
                var x_ = ev.clientX;               
                var y_ = ev.clientY;

                $(this).bind('mousemove',function(ev){
                //给当前元素（document ）绑定 mousemove事件
                    var x = ev.clientX;                   
                    var y = ev.clientY;
                //获取当前鼠标在浏览器页面的x(y)方向的位置 保存在变量 x_(y_)  

                    xN = x - x_;                      
                    yN = y - y_;
                //计算鼠标在当前元素内相对上次鼠标按下时的 x(y)轴距离并保存在变量   

                    roY += xN*0.1;
                    roX +=yN*0.02; 
                //按照比例换算并在变量基础上增加

                    $('#wrap').css('transform','perspective(800px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'); 
                    //$('#wrap')改变css动画transform样式值,角度是变量roY,roX的

                    x_ = ev.clientX;                    
                    y_ = ev.clientY; 
                //并将鼠标按下的位置设置成当前移动到的位置
                });
            }).mouseup(function(){  
            //绑定事件鼠标松开时触发的时间
                $(this).unbind('mousemove');
                //移除 当前元素（document)的 mousemove事件
               play = setInterval(function(){
                //开始周期性计时器
                    xN = xN * 0.95; 
                    yN = yN * 0.95;
                //按照比例换算 
                    if ( Math.abs(xN) <= 0.5 && Math.abs(yN)<= 0.5 )
                //判断(xN的绝对值<=0.5)而且 yN的绝对值也要<= 0.5)时执行下面的语句
                    {
                        clearInterval( play );
                //关闭计时器(play)
                    }
                    roY += xN*0.1; 
                    roX +=yN*0.02;
                    //按照比例换算  并在变量基础上增加
                    $('#wrap').css('transform','perspective(800px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)');
                    //$('#wrap')改变css动画transform样式角度是变量roY,roX的
                },30);
                //计时器每30毫秒触发一次
            });
              
              
              $('#scroll').width($('#scroll').width() - 
              $('#scroll li:first-child').innerWidth());
              $('#scroll').addClass('theanimation'); 
        });
        
        
        
        
