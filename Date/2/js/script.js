'use strict';
window.onload = function(){
	run.onclick = function(){
		
	
		setInterval(timeChange,15);	
		
		function timeChange(){
			let d=  new Date();
			rez.innerHTML=d.toLocaleString('RU-ru',{
			hour:'numeric',
			minute:'numeric',
			second:'numeric',
			millisecond:'numeric',

			}) +":"+d.getMilliseconds(); 	
		}
					
	}
}







