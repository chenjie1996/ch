window.onload=function(){
	var boxusername=document.getElementById("box-username");
	var username_01=document.getElementById("username_01");
	var username_02=document.getElementById("username_02");
	var btnalter1=document.getElementById("btn-alter1");
	var btnalter2=document.getElementById("btn-alter2");
	var btnalter3=document.getElementById("btn-alter3");
	var btnalter4=document.getElementById("btn-alter4");
	var btnalter5=document.getElementById("btn-alter5");
	var boxusername1=document.getElementById("box-username-1");
	var btn_01_1=document.getElementById("btn_01_1");
	var btn_02_1=document.getElementById("btn_02_1");
	var btn_01_2=document.getElementById("btn_01_2");
	var btn_02_2=document.getElementById("btn_02_2");
	var btn_01_3=document.getElementById("btn_01_3");
	var btn_02_3=document.getElementById("btn_02_3");
	var btn_01_4=document.getElementById("btn_01_4");
	var btn_02_4=document.getElementById("btn_02_4");
	var btn_01_5=document.getElementById("btn_01_5");
	var btn_02_5=document.getElementById("btn_02_5");
	var btn_01_6=document.getElementById("btn_01_6");
	var btn_02_6=document.getElementById("btn_02_6");
	var btn_01_7=document.getElementById("btn_01_7");
	var btn_02_7=document.getElementById("btn_02_7");
	var t1=document.getElementById("t1");
	var username_warm=document.getElementById("username_warm");
	var textwarm=document.getElementById("text-warm");
	var sex=document.getElementById("sex");
	var sexb=document.getElementById("sex-b");
	var sexg=document.getElementById("sex-g");
	var box_sex_select=document.getElementById("box-sex-select");
	var box_sex=document.getElementById("box-sex");
	var box_man=document.getElementById("sex-man");
	var box_woman=document.getElementById("sex-women");
	var sex_radio=document.getElementsByName("sex");
	var boxsdf=document.getElementById("box-sdf");
	var boxsdf1=document.getElementById("box-sdf-1");
	var sdf=document.getElementById("sdf");
	var sdf_p=document.getElementById("sdf_p");
	var textsdf=document.getElementById("sdf_text");
	var address_p=document.getElementById("address_p");
	var address_text=document.getElementById("address_text");
	var boxaddress=document.getElementById("box-address");
	var boxaddress1=document.getElementById("box-address-1");
	var address_plus=document.getElementById("address_plus");
	var address_x=document.getElementById("address_x");
	var phone=document.getElementById("phone");
	var phone_p=document.getElementById("phone_p");
	var phone_warm=document.getElementById("phone_warm");
	var phone_plus=document.getElementById("phone_plus");
	var phone_text=document.getElementById("phone_text");
	var boxphone=document.getElementById("box-phone");
	var boxphone1=document.getElementById("box-phone-1");
	var email=document.getElementById("email");
	var email_p=document.getElementById("email_p");
	var email_plus=document.getElementById("email_plus");
	var email_text=document.getElementById("email_text");
	var boxemail=document.getElementById("box-email");
	var boxemail1=document.getElementById("box-email-1");
	var intro=document.getElementById("intro");
	var boxintro=document.getElementById("box-intro");
	var boxintro1=document.getElementById("box-intro-1");
	var intro_p=document.getElementById("intro_p");
	var intro_text=document.getElementById("intro_text");
	var btnadd6=document.getElementById("btn-add6");
	
	    //用户名模块实现修改按钮的隐藏和显示
	    username_01.onmouseover=function(){
	        btnalter1.style.display="block";
	    }
	    btnalter1.onmouseover=function(){
	        btnalter1.style.display="block";
	    }
	    username_01.onmouseout=function(){
	        btnalter1.style.display="none";
	    }
	    btnalter1.onmouseout=function(){
	        btnalter1.style.display="none";
	    }

	    //用户名模块实现修改按钮的切换功能
	    btnalter1.onclick=function(){
	    	boxusername1.style.display="block";
	    	boxusername.style.display="none";
	    }
	    //用户名模块实现更改用户名的按钮
	    btn_02_1.onclick=function(){
	    	boxusername.style.display="block";
	    	boxusername1.style.display="none";
	    	btnalter1.style.display="none"
	    }
	    btn_01_1.onclick=function(){
	    	if(t1.value==""){
	    	textwarm.style.display="block";
	    	}else{
	    	username_02.innerHTML=t1.value;
	    	username_01.innerHTML=username_02.innerHTML;
	    	t1.value="";
	    	username_01.style.display="none";/*功能性username_01隐藏*/
	    	username_02.style.display="block";/*无功能性username_02显示*/
	    	boxusername.style.display="block";
	    	boxusername1.style.display="none";
	    	btnalter1.style.display="none";
	    	username_warm.style.display="block";
	    	//实现切换回有功能性的username_02
	    	if(username_warm=="block"){
	    		username_02.style.display="block";
	    		username_01.style.display="none";
	    	}
	    	//定时器实现修改按钮功能定时一天出现
	    	  setInterval(function(){
	    	   username_warm.style.display="none";
	    	     if(username_warm.style.display=="none"){
	  		     username_01.style.display="block";
	  		     username_02.style.display="none";
	            }
	          },86400000)//86400000
	    	}
	    }
	    //实现第二个修改按钮显示/隐藏
	    sex.onmouseover=function(){
	        btnalter2.style.display="block";
	    }
	    sexb.onmouseover=function(){
	        btnalter2.style.display="block";
	    }
	    sexg.onmouseover=function(){
	        btnalter2.style.display="block";
	    }
	    btnalter2.onmouseover=function(){
	        btnalter2.style.display="block";
	    }
	    sex.onmouseout=function(){
	        btnalter2.style.display="none";
	    }
	    sexb.onmouseout=function(){
	        btnalter2.style.display="none";
	    }
	    sexg.onmouseout=function(){
	        btnalter2.style.display="none";
	    }
	    btnalter2.onmouseout=function(){
	        btnalter2.style.display="none";
	    }
	    //实现第二个修改按钮点击效果
	    btnalter2.onclick=function(){
	    	sexb.style.display="none";
	    	sexg.style.display="none";
	    	box_sex.style.display="none";
	    	box_sex_select.style.display="block";
	    }
	    //变量s作为保存性别后读取性别的value保存起来，为取消功能提供数据暂存
	    var s="";
	    //单选框取消按钮功能
	    btn_02_2.onclick=function(){
	    	box_sex.style.display="block";
	    	box_sex_select.style.display="none";
	    	if(s=="man"){
	    		sexb.style.display="block";
	    		sexg.style.display="none";
	    	}else{
	    	    sexb.style.display="none";
	    	    sexg.style.display="block";
	    	}
	    }
	    //单选框保存性别功能
	    btn_01_2.onclick=function(){
	    	for(var i=0; i<sex_radio.length; i ++){
	    	if(sex_radio[i].checked){
	    		s=sex_radio[i].value;
	    	if(sex_radio[i].value=="man"){
	    		sexb.style.display="block";
	    		sexg.style.display="none";
	    		box_sex_select.style.display="none";
	    		box_sex.style.display="block";
	    		
	    	}else{
	    		sexb.style.display="none";
	    		sexg.style.display="block";
	    		box_sex_select.style.display="none";
	    		box_sex.style.display="block";
	    	}
	    	}
	    	}
	    }
	    //个性签名功能
	    //实现第三个修改按钮显示/隐藏
	    sdf_p.onmouseover=function(){
	        btnalter3.style.display="block";
	    }
	    sdf.onmouseover=function(){
	        btnalter3.style.display="block";
	    }
	    btnalter3.onmouseover=function(){
	        btnalter3.style.display="block";
	    }
	    sdf_p.onmouseout=function(){
	        btnalter3.style.display="none";
	    }
	    sdf.onmouseout=function(){
	        btnalter3.style.display="none";
	    }
	    btnalter3.onmouseout=function(){
	        btnalter3.style.display="none";
	    }
	    //实现第三个修改按钮点击效果
	    btnalter3.onclick=function(){
	    	boxsdf.style.display="none";
	    	boxsdf1.style.display="block";
	    }
	    //个人签名更改保存功能
	    btn_01_3.onclick=function(){
	    	sdf.innerHTML=textsdf.value;
	    	boxsdf.style.display="block";
	    	boxsdf1.style.display="none";
	    	textsdf.value="";
	    }
	    //个人签名更改取消功能
	    btn_02_3.onclick=function(){
	    	boxsdf.style.display="block";
	    	boxsdf1.style.display="none";
	    	textsdf.value="";
	    }
	    //居住地功能模块
	    //实现第四个修改按钮点击效果
	    address_plus.onclick=function(){
	    	boxaddress.style.display="none";
	    	boxaddress1.style.display="block";
	    }
	    //实现地址添加保存功能
	    btn_01_4.onclick=function(){
	    	address.innerHTML=address_text.value;
	    	boxaddress.style.display="block";
	    	boxaddress1.style.display="none";
	    	address_plus.style.display="none";
	    	address_x.style.display="block";
	    	address_text.value="";
	    }
	    //实现地址添加取消功能
	    btn_02_4.onclick=function(){
	    	boxaddress.style.display="block";
	    	boxaddress1.style.display="none";
	    	address_text.value="";
	    }
	    //删除地址功能
	    address_x.onclick=function(){
	    	address_plus.style.display="block";
	    	address.innerHTML="";
	    	address_x.style.display="none";
	    }
	    //手机号功能模块
	    //手机号添加修改功能
	    if(phone.innerHTML==""){
	    	phone_plus.style.display="block";
	    	btnalter4.style.display="none";
	    }else{
	    	phone_plus.style.display="none";
	    	btnalter4.style.display="block";
	    
	    }
	    //手机号添加按钮功能
	    phone_plus.onclick=function(){
	    	boxphone.style.display="none";
	    	boxphone1.style.display="block";
	    }
	    //手机号添加功能——取消功能
	    btn_02_5.onclick=function(){
	    	boxphone.style.display="block";
	    	boxphone1.style.display="none";
	    	phone_warm.style.display="none";
	    	phone_text.value="";
	    	if(phone.innerHTML==""){
	    		phone_plus.style.display="block";
	    	}else{
	    		phone_plus.style.display="none";
	    	}
	    }
	    //手机号添加功能——保存功能
	    btn_01_5.onclick=function(){
	    	if(phone_text.value==""){
	    		phone_warm.style.display="block";
	    	}else{
	    	phone.innerHTML=phone_text.value;
	    	boxphone.style.display="block";
	    	boxphone1.style.display="none";
	    	phone_plus.style.display="none";
	    	btnalter4.style.display="none";
	    	phone_text.value="";
	    	//修改按钮的隐藏、显示
	        phone_p.onmouseover=function(){
	           btnalter4.style.display="block";
	        }
	        phone.onmouseover=function(){
	           btnalter4.style.display="block";
	        }
	        btnalter4.onmouseover=function(){
	           btnalter4.style.display="block";
	        }
	        phone_p.onmouseout=function(){
	           btnalter4.style.display="none";
	        }
	        phone.onmouseout=function(){
	           btnalter4.style.display="none";
	        }
	        btnalter4.onmouseout=function(){
	           btnalter4.style.display="none";
	        }
	        }
	    }
	    //手机号修改功能
	    btnalter4.onclick=function(){
	    	boxphone.style.display="none";
	    	boxphone1.style.display="block";
	    }
	    //邮箱功能模块
	    
	    if(email.innerHTML==""){
	    	email_plus.style.display="block";
	    	btnalter5.style.display="none";
	    }else{
	    	email_plus.style.display="none";
	    	btnalter5.style.display="block";
	    
	    }
	    //邮箱添加按钮功能
	    email_plus.onclick=function(){
	    	boxemail.style.display="none";
	    	boxemail1.style.display="block";
	    }
	    //邮箱添加功能——取消功能
	    btn_02_6.onclick=function(){
	    	boxemail.style.display="block";
	    	boxemail1.style.display="none";
//	    	phone_warm.style.display="none";
	    	email_text.value="";
	    	if(email.innerHTML==""){
	    		email_plus.style.display="block";
	    	}else{
	    		email_plus.style.display="none";
	    	}
	    }
	    //邮箱添加功能——保存功能
	    btn_01_6.onclick=function(){
	    	if(email_text.value==""){
//	    		phone_warm.style.display="block";
	    	}else{
	    	email.innerHTML=email_text.value;
	    	boxemail.style.display="block";
	    	boxemail1.style.display="none";
	    	email_plus.style.display="none";
	    	btnalter5.style.display="none";
	    	email_text.value="";
	    	//修改按钮的隐藏、显示
	        email_p.onmouseover=function(){
	           btnalter5.style.display="block";
	        }
	        email.onmouseover=function(){
	           btnalter5.style.display="block";
	        }
	        btnalter5.onmouseover=function(){
	           btnalter5.style.display="block";
	        }
	        email_p.onmouseout=function(){
	           btnalter5.style.display="none";
	        }
	        email.onmouseout=function(){
	           btnalter5.style.display="none";
	        }
	        btnalter5.onmouseout=function(){
	           btnalter5.style.display="none";
	        }
	        }
	    }
	    //邮箱修改功能
	    btnalter5.onclick=function(){
	    	boxemail.style.display="none";
	    	boxemail1.style.display="block";
	    }
	    //个人简介填写功能模块
	    //个人简介填写按钮功能
	    intro_p.onmouseover=function(){
	        btnadd6.style.display="block";
	    }
	    intro.onmouseover=function(){
	        btnadd6.style.display="block";
	    }
	    btnadd6.onmouseover=function(){
	        btnadd6.style.display="block";
	    }
	    intro_p.onmouseout=function(){
	        btnadd6.style.display="none";
	    }
	    intro.onmouseout=function(){
	        btnadd6.style.display="none";
	    }
	    btnadd6.onmouseout=function(){
	        btnadd6.style.display="none";
	    }
	    //实现第三个修改按钮点击效果
	    btnadd6.onclick=function(){
	    	boxintro.style.display="none";
	    	boxintro1.style.display="block";
	    }
	    //个人签名更改保存功能
	    btn_01_7.onclick=function(){
	    	intro.innerHTML=intro_text.value;
	    	boxintro.style.display="block";
	    	boxintro1.style.display="none";
	    	intro_text.value="";
	    }
	    //个人签名更改取消功能
	    btn_02_7.onclick=function(){
	    	boxintro.style.display="block";
	    	boxintro1.style.display="none";
	    	intro_text.value="";
	    }
	    //导航栏二级菜单
	    var touxiang = document.getElementById("daohanga1")
		var xiaoxi = document.getElementById("daohanga11")
		var ul1 = document.getElementById("danghanglist1")
		var ul2 = document.getElementById("danghanglist2")
		touxiang.onclick = function(){
			ul2.style.display = "block";
		}
		touxiang.onblur= function(){
			ul2.style.display = "none";
		}
		xiaoxi.onclick = function(){
			ul1.style.display = "block";
		}
		xiaoxi.onblur= function(){
			ul1.style.display = "none";
		}
}
	   
