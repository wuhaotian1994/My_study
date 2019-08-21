var cv = document.getElementById("box");
var context=cv.getContext("2d");

var tk_me=new Image();
tk_me.src="../img/tank.png"
tk_me.onload=function(){
	context.drawImage(tk_me,0,0);
}