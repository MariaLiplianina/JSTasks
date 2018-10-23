'use strict';
window.onload = function(){
	//but.style.fontSize = "14px";
	//var size = 14
	but.onclick = function(){
		if(but.innerHTML=="Показать"){
			but.innerHTML="Скрыть";
			box.style.display="block";
			but.style.fontSize= random() +"px";
			but.style.backgroundColor="rgb("+random(0,255) +","+random(0,255)+","+random(0,255)+")";
			
			console.log(but.style.fontSize);
		}
		
		else {
			but.innerHTML="Показать";
			box.style.display="none";
			
		}
	}
	
	
	function random(min=14,max=40){
	
      return  Math.floor( min + Math.random() * (max + 1 - min));
	}
}










