'use strict'

window.onload = function(){
	
	var run = document.body.children[0];
	
	
	run.onclick = function() {
		
		var list1 = document.body.children[1].children[0].children;
		
		for (var i = 0; i < list1.length; i++) {
			if (i % 2 == 0) {
				list1[i].style.backgroundColor = "#ccc";
			} else if (i % 2 == 1){
				list1[i].style.backgroundColor = "#000";
				list1[i].style.color = "#fff";
			} 
			
		}
	
		
		document.body.children[2].children[1].style.backgroundColor = "#ccc";
		
		document.body.children[2].children[3].children[0].style.color = "red";
		document.body.children[2].children[3].children[0].style.textDecoration = "none";
		
		document.body.children[3].children[0].children[0].children[2].style.border = "1px solid black";
	}
		var hello = document.body.children[1].children[0].children[3];
		
		hello.onclick = function() {
			var divs = document.body.children;
			var sum = 0;
			for (var j = 0; j < divs.length; j++) {
					sum += divs[j].children.length;
				}
			console.log(sum);	
			}
		
	}














