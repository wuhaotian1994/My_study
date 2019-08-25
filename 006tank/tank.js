var cv;
var context;
var tk_1;
var tk_2;
var yxwidth=32.5;
var yxheight=32.5;
var walls;
var tk1;
var tk2;
var atime;
var btime;
function Tank(color,x,y){
	this.x=x;
	this.y=y;
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
	walls= new CreatWall("wall");
	setTimeout(() => {
		context.drawImage(tk_1,tk1.x,tk1.y,yxwidth,yxheight);
		context.drawImage(tk_2,tk2.x,tk2.y,yxwidth,yxheight);
		
	}, 2000);

	var akey=null;
	var bkey=null;
	var keypressed={};
	var amove=new Move("a",null);
	var bmove=new Move("b",null);
	document.onkeydown=function(event)
	{
		if(event.key=="ArrowLeft" || event.key=="ArrowUp" || event.key=="ArrowDown" || event.key=="ArrowRight")
		{
		if(akey==event.key)return;
		else{
			clearInterval(atime);
			amove.moves("a",event.key);
			akey=event.key;
			keypressed[event.keyCode]=true;
		}
	}
	if(event.key=="w" || event.key=="a" || event.key=="s" || event.key=="d")
	{
		if(bkey==event.key)return;
		else{
			clearInterval(btime);
			bmove.moves("b",event.key);
			bkey=event.key;
			keypressed[event.keyCode]=true;
			}
	}
}
	document.onkeyup=function(event)
	{
		keypressed[event.keyCode]=false;
		if(event.key=="ArrowLeft" || event.key=="ArrowUp" || event.key=="ArrowDown" || event.key=="ArrowRight")
		{
		if(akey==event.key){
			clearInterval(atime);
			akey=null;
			if(keypressed[37])
			amove.moves("a",akey="ArrowLeft");else
			if(keypressed[38])
			amove.moves("a",akey="ArrowUp");else
			if(keypressed[39])
			amove.moves("a",akey="ArrowRight");else
			if(keypressed[40])
			amove.moves("a",akey="ArrowDown");
			
		}
	}
	if(event.key=="w" || event.key=="a" || event.key=="s" || event.key=="d")
	{
		if(bkey==event.key){
			clearInterval(btime);
			bkey=null;
			if(keypressed[65])
			bmove.moves("b",bkey="a");else
			if(keypressed[87])
			bmove.moves("b",bkey="w");else
			if(keypressed[83])
			bmove.moves("b",bkey="s");else
			if(keypressed[68])
			bmove.moves("b",bkey="d");
			
		}
	}}
}

function Move(tankp,Arrow)
{
	this.tankp=tankp;
	this.Arrow=Arrow;
	this.moves=function(tankp,Arrow){
		if(tankp=="a"){
		switch(Arrow)
		{
			case "ArrowLeft":
				tk_1=tk1.left;break;
			case "ArrowRight":
				tk_1=tk1.right;break;
			case "ArrowUp":
				tk_1=tk1.top;break;
			case "ArrowDown":
				tk_1=tk1.bottom;break;
		}
		atime=setInterval(function(){
			context.clearRect(tk1.x,tk1.y,yxwidth,yxheight);
			switch(Arrow){
			case "ArrowLeft":
				tk1.x--;break;
			case "ArrowRight":
				tk1.x++;break;
			case "ArrowUp":
				tk1.y--;break;
			case "ArrowDown":
				tk1.y++;break;
			}
			context.drawImage(tk_1,tk1.x,tk1.y,yxwidth,yxheight);
		},16.7);
		
	}
	if(tankp=="b"){
		switch(Arrow)
		{
			case "a":
				tk_2=tk2.left;break;
			case "d":
				tk_2=tk2.right;break;
			case "w":
				tk_2=tk2.top;break;
			case "s":
				tk_2=tk2.bottom;break;
		}
		btime=setInterval(function(){
			context.clearRect(tk2.x,tk2.y,yxwidth,yxheight);
			switch(Arrow){
			case "a":
				tk2.x--;break;
			case "d":
				tk2.x++;break;
			case "w":
				tk2.y--;break;
			case "s":
				tk2.y++;break;
			}
			context.drawImage(tk_2,tk2.x,tk2.y,yxwidth,yxheight);
		},16.7);
	}
}
}
function StopMove(tankp){
	clearInterval( tankp);
}

//想把所有动作都做到一个函数里来，这个函数完成绘画
function GameConsole(key){
	if(key="paused")
		return clearInterval(r);
	r=setInterval(() => {
		
	}, 16.6);
}
function CreatWall(model){
	this.wall=new Image();
	this.wall.src="../img/"+model+".png";
}
