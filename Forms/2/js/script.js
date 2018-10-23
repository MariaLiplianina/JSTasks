'use strict';
window.onload = function(){
	let form  =  document.reg
	let but  =  form.send;
	form.login.focus();
	form.message.oninput = checkTextArea;
	var tech = document.querySelectorAll('input[name="tech"]');
	
	but.onclick = function(){
		var str="";
		for(var i = 0; i<form.elements.length;i++){
			if(form.elements[i].type!="button" && 
				form.elements[i].type!="checkbox" &&
				form.elements[i].type!="password") {
				if(form.elements[i].value==""){
					error(form.elements[i],true);
				}
				else {
					error(form.elements[i],false);
					str+=form.elements[i].name + " - " + form.elements[i].value + "\n"; 
				}
			}
			
			
			
			
		}
		
		checkPass()
		
		function checkPass(){
			if(form.elements['pass1'].value == form.elements['pass2'].value){
				str+=form.elements['pass1'].name + " - " + form.elements['pass1'].value + "\n"; 
				
				error(form.elements['pass1'],false);
				error(form.elements['pass2'],false);
			}
			else {
				error(form.elements['pass1'],true);
				error(form.elements['pass2'],true);
			}
		}
		
		
		
		for (var i=0, x="";i<tech.length;i++){
			if(tech[i].checked){
				x+=tech[i].value + " / "
				//console.log(x);
			}
			
			
		}
		str+="Tech : " + x;
		
		console.log(str);
	
	}


	for (let i = 0; i < tech.length; i++){
		tech[i].onclick = updateCheckbox;
	}


	function updateCheckbox() {
		let k = 0;
		for (let i = 0; i < tech.length; i++){
				if(tech[i].checked) {
					k += 1;
				}
			}
		if (k >= 2) {
			for (let i = 0; i < tech.length; i++){
				if(tech[i].checked == false){
					tech[i].disabled = true;
				}
			}

		}
		else {
			for (let i = 0; i < tech.length; i++){
				tech[i].disabled = false;
			}
		}
	}




	
	/*
	for(let i = 0;i< form.elements.length;i++ ){
		if(form.elements[i].type!="button") {
			form.elements[i].onblur = checkBlur;
		}
	}
	
	
	
	function checkBlur() {
		if(this.value==""){
			this.focus();
			error(this, true);
		}
		
		else {
			error(this,false);
		}
	}*/
	
	
	function checkTextArea(){ 
		let k = this.value.length;
		count.innerHTML = `${k} | 50`;
		if( k>50){	
			error(this,true);
			this.value = this.value.slice(0,51);
			
		}
		else {
			error(this,false);
			//this.value = 22;
		}
	}
	
	
	function error(elem, status){
		if(status){
			elem.className = "error"
		}
		else {
			elem.className="";
		}
	}



}








