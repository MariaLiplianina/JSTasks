'use strict';
window.onload = function(){
	but.onclick = function(){
		if(but.innerHTML=="Показать"){
			but.innerHTML="Скрыть";
			box.style.display="block";
		}
		
		else {
			but.innerHTML="Показать";
			box.style.display="none";
			
		}
	}
}








