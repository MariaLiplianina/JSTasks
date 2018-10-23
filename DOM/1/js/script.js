'use strict';
window.onload = function(){
	let td = document.querySelectorAll('#table tr td');
	console.log(td);
	for(let i = 0; i<td.length;i++){
		td[i].innerHTML = random(1,20);
		td[i].onclick = checkTd;
	}
}

var sum = 0;

function random(min=3,max=20){
	
      return  Math.floor( min + Math.random() * (max + 1 - min));
}

function checkTd(){
	if(this.hasAttribute('class') && this.getAttribute('class')=="active"){
		this.removeAttribute('class');
		sum-=+this.innerHTML;
		rez.innerHTML = sum;
	
	
	}
	
	else {
		this.setAttribute('class','active');
		sum+=+this.innerHTML;
		rez.innerHTML = sum;
	}
}







