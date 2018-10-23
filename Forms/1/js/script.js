'use strict';
window.onload = function(){
	let form  =  document.reg
	let but  =  form.send;
	form.userName.focus();
	form.message.oninput = checkTextArea;
	
	but.onclick = function(){
		for(var i = 0; i < form.elements.length; i++){
			if(form.elements[i].type!="button" && form.elements[i].type!="checkbox") {
				console.log(form.elements[i].value);
			}
		}
		
		let tech = document.querySelectorAll('input[name="tech"]');
		
		for (let i=0; i < tech.length;i++){
			if(tech[i].checked){
				console.log(tech[i].value);
			}
		}
		for(let i = 0; i < form.elements.length;i++ ){
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
	
	
	
	
	
	
	
	function checkTextArea(){ "1asd"
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
	

}







