'use strict';
window.onload = function(){
	
	let edit = document.querySelector("#menu p");
	let texts = document.querySelectorAll("body > p");
	
	window.oncontextmenu = function(){
		event.preventDefault();
	}
	
	for (let i = 0; i < texts.length; i++){
		texts[i].oncontextmenu = callMenu;
	}
	
	function callMenu(){
		if (menu.style.display = "none") {
			
			menu.style.display = "block";
			menu.style.left = event.clientX + "px";
			menu.style.top = event.clientY + "px";
			
			this.id = "current";
			
			edit.onclick = function() {
				var text = prompt("Введите текст", '');
				if (text) {
					menu.style.display = "none";
					current.innerHTML = text;
				}
				current.removeAttribute("id");
			}
		}
		
		else if (menu.style.display = "block") {
			menu.style.display = "none";
		}
	}

	

	

}







