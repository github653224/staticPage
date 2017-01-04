//全局变量，触摸开始位置  
var startY = 0, endY = 0; 
//window.onload = isTouchDevice();

//touchstart事件  
function touchSatrtFunc(evt) { 
	try  
	{  
		//evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  

		var touch = evt.touches[0]; //获取第一个触点   
		var y = Number(touch.pageY); //页面触点Y坐标  
		//记录触点初始位置  
		startY = y;  
	}  
	catch (e) {  
	}  
}  

//touchmove事件，这个事件无法获取坐标  
function touchMoveFunc(evt) { 
	try  
	{  
		var touch = evt.touches[0]; //获取第一个触点   
		var y = Number(touch.pageY); //页面触点Y坐标  

		//判断滑动方向
		
		endY = 0;
		endY = y;
	
	}  
	catch (e) {  
	}  
}  

//touchend事件  
function touchEndFunc(evt) {
	var ele;
	if(endY>1){
		alert(startY-endY);
		try {
			if((startY-endY)>150){
				//翻页操作
				ele = document.getElementsByClassName("main-page");
				var name = ele[0].className;
				for(var i=0;i<3;i++){
					if(name.indexOf("z-current")>0){
						ele[i].className = "main-page";
						ele[i].style.transform = "scale(1)";
						if(i==2){
							name=ele[0].className;
							ele[0].className="main-page z-current";
							ele[0].style.transform = "translateY(0px)";
						}else{
							name=ele[i+1].className;
							ele[i+1].className="main-page z-current";
							ele[i+1].style.transform = "translateY(0px)";
						}
					}else
						if(i==2){
							name=ele[2].className;
						}else{
							name=ele[i+1].className;
						}
				}
			}else{
				if((endY-startY)>150){
					//翻页操作
					ele = document.getElementsByClassName("main-page");
					var name = ele[2].className;
					for(var i=2;i>=0;i--){
						if(name.indexOf("z-current")>0){
							ele[i].className = "main-page";
							ele[i].style.transform = "scale(1)";
							if(i==0){
								name=ele[2].className;
								ele[2].className="main-page z-current";
								ele[2].style.transform = "translateY(0px)";
							}else{
								name=ele[i-1].className;
								ele[i-1].className="main-page z-current";
								ele[i-1].style.transform = "translateY(0px)";
							}
						}else
							if(i==0){
								name=ele[2].className;
							}else{
								name=ele[i-1].className;
							}
					}
				}	
			}
		}
		catch (e) {
		}
	}
}  

//绑定事件  
function bindEvent() {  
	document.addEventListener('touchstart', touchSatrtFunc, false);  
	document.addEventListener('touchmove', touchMoveFunc, false);  
	document.addEventListener('touchend', touchEndFunc, false);  
}  

//判断是否支持触摸事件  
function isTouchDevice() {  
	try {  
		document.createEvent("TouchEvent");  
		bindEvent(); //绑定事件
		//alert("1");
	}  
	catch (e) {  
		//alert("不支持TouchEvent事件！" + e.message);  
	}  
}  