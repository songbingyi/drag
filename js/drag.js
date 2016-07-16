function getByClass(clasName,parent){
 var oParent = parent?document.getElementById(parent):document,
     eles = [],
	 elements = oParent.getElementsByTagName('*');
	 
 for(var i=0,l=elements.length;i<l;i++){
	 if(elements[i].className == clasName){
		 eles.push(elements[i]);}
	 };
 return eles;
}

window.onload = drag;
function drag(){
	var oTitle = getByClass('login_logo_webqq','loginPanel')[0];
	var closeBtn = document.getElementById("ui_boxyClose");
	var loginState = document.getElementById("loginState"),
	loginTxt = document.getElementById("login2qq_state_txt"),
	statelist =document.getElementById("loginStatePanel"),
	lis = statelist.getElementsByTagName("li"),
	stateshow = document.getElementById("loginStateShow");
	
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			this.style.backgroundColor = "#FF0000";
			}
		lis[i].onmouseout = function(){
			this.style.backgroundColor = "";
			}
		lis[i].onclick = function(){
			loginTxt.innerHTML = this.childNodes[3].innerHTML;
			stateshow.className = "login-state-show"+" "+this.id;
			statelist.style.display = "none";
			}
		}	
	
		
	oTitle.onmousedown = fnDown;
	oTitle.onmouseup = fnUp;	
	closeBtn.onclick = fClose;
	loginState.onclick = changeState;
}

	
	
function fnUp(){
	document.onmousemove = null;
	document.onmouseup = null;
	}
function fnDown(event){
	var oDrag = document.getElementById("loginPanel");
	event = event || window.event;
	var disX = event.clientX - oDrag.offsetLeft;
	var disY =  event.clientY - oDrag.offsetTop;
	document.onmousemove = function(event){
		event = event || window.event;
		var winW = document.body.clientWidth || document.documentElement.clientWidth;
		var winH = document.body.clientHeight || document.documentElement.clientHeight
		var t = event.clientY - disY;
		var l = event.clientX - disX;
		if(l<1){
			l=0;
			}else if(l > winW - oDrag.offsetWidth){
				l = winW - oDrag.offsetWidth};
		if(t<1){
			t=10;
			}else if(t > winH - oDrag.offsetHeight){
				t = winH - oDrag.offsetHeight;}
		oDrag.style.top = t + "px";
		oDrag.style.left = l + "px";
		}
	}
function fClose(){
	document.getElementById("loginPanel").style.display = "none";
	}

function changeState(){
	document.getElementById("loginStatePanel").style.display = "block";

}
