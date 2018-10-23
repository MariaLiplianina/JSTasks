'use strict';
window.onload = function(){
	run.onclick = function(){
		let d=  new Date();
		let month=['Ян','Фе','Ма','Ап','Май','Июнь','Июль','Ав','Сен','Окт','Нб','Дек']
		rez.innerHTML = d.getFullYear() + " - "+
						month[d.getMonth()] + " - "+
						d.getDate() + '<br />';
						
		rez.innerHTML+=d.toLocaleString('RU-ru',{
			year:'numeric',
			month:'long',
			day:'numeric',
			era : 'narrow'
		}) 				
	}
}







