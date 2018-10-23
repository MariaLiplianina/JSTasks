'use strict';
window.onload = function(){

	//but.style.fontSize = "14px";
	let imgs = document.querySelectorAll("ul li img");

	//big.children[0].setAttribute("src",imgs[0].getAttribute('src'));

	big.children[0].src = imgs[0].getAttribute('data-src');
	imgs[0].setAttribute('class','activeImg');

	
	big.onclick = zoomImg;

	for(let i = 0; i < imgs.length; i++){
		imgs[i].onclick = checkImages;
	}

	
	
	function random(min = 14, max = 40){
      return  Math.floor( min + Math.random() * (max + 1 - min) );
	}

	function zoomImg(){
		if(this.hasAttribute('class') && this.getAttribute('class')=="active-big"){
			this.removeAttribute('class');
		}
	
	else {
		this.setAttribute('class','active-big');
		dimmer.setAttribute("display", "block");
		}
	}
	
	function checkImages(){

		let src = this.getAttribute('data-src');
		big.children[0].src = src;

		let active =  document.querySelectorAll("ul li img .activeImg");
		for(let i = 0; i < active.length; i++){
			active[i].removeAttribute('class');
		}
		
		this.setAttribute('class','activeImg');
	}
}










