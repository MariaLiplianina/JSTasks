'use strict';
window.onload = function(){
	/*
	my.onclick = function(){
		if(my.innerHTML==="Open"){
			my.innerText="<h2>Close</h2>"
		}else {
			my.innerHTML="Open";
		}
	}*/
	
	var mas = [];
	var delMas = [];
	
	add.onclick = function(){
		mas.push(+prompt('Введите число',1))
	}
	
	show.onclick = function(){
		res.innerHTML=mas.join(" ");
		console.log(mas);
	}
	
	sortup.onclick = function(){
		mas.sort(function(a, b){return a - b});;
		console.log(mas);
	}
	
	sortdown.onclick = function(){
		mas.sort(function(a, b){return b - a});;
		console.log(mas);
	}
	
	del.onclick = function(){
		var delItem = (+prompt('Введите число', 1));

		console.log(mas);
	}
	
	empty.onclick = function(){
		mas.length = 0;
		console.log(mas);
		
	}
	
}








