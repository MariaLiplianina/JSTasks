'use strict';
window.onload = function(){
			
	function countDown() {
		let d = new Date();
		let dateFinish = new Date("2018/11/29");
		
		let t = dateFinish.getTime() - d.getTime();
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		let days = Math.floor(t / (1000 * 60 * 60 * 24));
		
		rez.innerHTML = days;
		rez2.innerHTML = hours;
		rez3.innerHTML = minutes;
		rez4.innerHTML = seconds;
	}	

	setInterval(countDown, 1000);
}






