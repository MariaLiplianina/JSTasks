'use strict';
window.onload = function(){
	big.style.top="0px";
		big.style.left="0px";
	window.onclick = function(){
		big.style.top=event.clientY+"px";
		big.style.left=event.clientX+"px";
	
		
	}
	
	window.onwheel = function(){
		console.log(event.wheelDelta)
	}
	
	window.onkeydown = function(e){
		if(e.which==39){
			let  k = 0;
			
			//setTimeout();;
			//clearTimeout();;
			let setIn = setInterval(function(){
				big.style.left=parseInt(big.style.left)+5+"px";
				console.log(k);
				k++;
				if(k==100){
					clearInterval(setIn);
				}
			},70)
			
			
			
		}
	
		
	}

}







