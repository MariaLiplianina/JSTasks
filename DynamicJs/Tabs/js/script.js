'use strict';
window.onload = function(){
	let dt = tabs.querySelector('dt');
	let dd = tabs.querySelector('dd');
	let allDt = tabs.querySelectorAll('dt');
	
	dt.className = "active";
	dd.className = "active";
	
	for(let i=0; i<allDt.length;i++){
		allDt[i].onclick = function(){
			let activeDt = tabs.querySelector('dt.active');
			
			
			let activeDd = tabs.querySelector('dd.active');
			activeDd.className="";
			activeDt.className="";
			this.className="active";
			this.nextSibling.nextSibling.className="active";
			
		}
	}
}







