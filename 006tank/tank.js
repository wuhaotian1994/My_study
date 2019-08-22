var cv;
var context;
var tk_1;
var tk_2;
var tk_width=32.5;
var tk_height=32.5;

function Tank(color,ix,iy){
	this.x=ix;
	this.y=iy;
	this.top=new Image();
	this.left=new Image();
	this.right=new Image();
	this.bottom=new Image();
	this.top.src="../img/"+color+"t.png";
	this.left.src="../img/"+color+"l.png";
	this.right.src="../img/"+color+"r.png";
	this.bottom.src="../img/"+color+"b.png";
}

window.onload=function(){
	cv = document.getElementById("cv");
	context=cv.getContext("2d");
	tk1=new Tank("green",25,25);
	tk2=new Tank("red",80,80);
	// console.log(tk.top);
	tk_1=tk1.top
	tk_2=tk2.top
	// var tk_timer=setInterval(function(){
	// 	tk_me_y ++
	// 	context.clearRect(0,0,600,400);
	// 	context.drawImage(tk_me,tk_me_x,tk_me_y,20,15);
	// },500);
	document.onkeydown=function(event){
		if(event.keyCode =="37")
		{
			tk_1=tk1.left
			tk1.x--;
		}
		if(event.keyCode =="39")
		{
			tk_1=tk1.right
			tk1.x++;
		}
		if(event.keyCode =="38")
		{
			tk_1=tk1.top
			tk1.y--;
		}
		if(event.keyCode =="40")
		{
			tk_1=tk1.bottom
			tk1.y++;
		}
		
		context.clearRect(0,0,800,1800);
		context.drawImage(tk_1,tk1.x,tk1.y,tk_width,tk_height);
		if(event.keyCode =="65")
		{
			tk_2=tk2.left
			tk2.x--;
		}
		if(event.keyCode =="68")
		{
			tk_2=tk2.right
			tk2.x++;
		}
		if(event.keyCode =="87")
		{
			tk_2=tk2.top
			tk2.y--;
		}
		if(event.keyCode =="83")
		{
			tk_2=tk2.bottom
			tk2.y++;
		}
		context.drawImage(tk_2,tk2.x,tk2.y,tk_width,tk_height);
	}

	
	var myworker=new Worker("testworker.js");
	myworker.onmessage=function(){
		console.log(event.data);
	};
	
}
