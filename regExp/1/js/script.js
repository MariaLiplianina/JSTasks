'use strict';
window.onload = function(){
	let form  =  document.reg
	let input =  form.querySelectorAll('input[type="text"], input[type="password"]');
	console.log(input);
	
	for(let i = 0; i<input.length;i++){
		input[i].onblur = function(){
			var mas = [	/^\w{6,}$/i,
					/^\+375-(29|44|33|25)-\d{3}(-\d{2}){2}$/,
					/^[а-яА-Я]{2,20}$/,
					/^\w{2,20}\@[a-zA-z]{2,10}\.(by|бел)$/i,
					/^(?=.*\d)(?=.*\W)(?=.*[a-zA-Z]).{6,}$/];

			if(this.name == 'login'){
				checkInput(0);
			}
			else if(this.name == 'phone'){
				checkInput(1);
			}
			else if(this.name == 'userName') {
				checkInput(2);
			}
			else if(this.name == 'email'){
				checkInput(3);
			}
			else if(this.name == 'pass1'){
				checkInput(4);
			}

			function checkInput(k) {
				if(mas[k].test(input[i].value)){
					error(input[i], false)
					console.log(input[i].value);
				}
				else {
					error(input[i], true);
					input[i].focus();	
				}	
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
}







