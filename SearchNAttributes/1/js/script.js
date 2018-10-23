'use strict';
window.onload = function(){
	let td = document.querySelectorAll('#table tr td');
	let tr = document.querySelectorAll('#table tr');
	console.log(td);
	for(let i = 0; i<td.length;i++){
		td[i].innerHTML = random(1,20);
		td[i].onclick = checkTd;
	}
	
	var sumDirect = 0;
	var sumInDirect = 0;
	
	for(let i = 0; i<tr.length;i++){
		let direct = tr[i].children[i];
		let indirect = tr[i].children[tr[i].children.length-1-i]
		
		direct.setAttribute('class','direct');
		sumDirect+=+direct.innerHTML;
		indirect.setAttribute('class','indirect');
		sumInDirect+=+indirect.innerHTML;
		
		
	}
	
	console.log(sumDirect)
	console.log(sumInDirect)
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







