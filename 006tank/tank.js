var cv;
var context;
var tk_me=new Image();
var tk_me_x=0;
var tk_me_y=0;
tk_me.src="../img/tank.png"

window.onload=function(){
	cv = document.getElementById("box");
	context=cv.getContext("2d");
	context.drawImage(tk_me,tk_me_x,tk_me_y,20,15);
	// var tk_timer=setInterval(function(){
	// 	tk_me_y ++
	// 	context.clearRect(0,0,600,400);
	// 	context.drawImage(tk_me,tk_me_x,tk_me_y,20,15);
	// },500);
	document.onkeydown=function(event){
		if(event.keyCode =="37")
		{
			tk_me_x--;
		}
		if(event.keyCode =="39")
		{
			tk_me_x++;
		}
		if(event.keyCode =="38")
		{
			tk_me_y--;
		}
		if(event.keyCode =="40")
		{
			tk_me_y++;
		}
		context.clearRect(0,0,600,400);
		context.drawImage(tk_me,tk_me_x,tk_me_y,20,15);
	}
}
