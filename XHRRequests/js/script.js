'use strict';
window.onload = function(){
	/*class Person {
		constructor(name, sn){
			this.name = name;
			this.sn = sn;
		}
		
		show(){
			return this.name + " - " +this.sn;
		}
		
		setValue(name,surname){
			this.name =  name;
			this.sn =  surname;
		}
	}*/
	
	d.onchange = function(){
		table.innerHTML = "";
		let x = this.value;
		let xhr = new XMLHttpRequest();
		xhr.open('GET',`http://www.nbrb.by/API/ExRates/Rates/840?ParamMode=1&onDate=${x}`,true);
		
		xhr.send();
		
		xhr.onload = function(){
			console.log(typeof this.responseText);
			console.log(this.responseText);
			let data = JSON.parse(this.responseText);
			for(let key in data) {
				let div =  document.createElement('div');
				div.innerHTML = `${key} - ${data[key]}`;
				//console.log(div);
				table.appendChild(div);
			}
		}
	}
	
	run.onclick = function(){
		let xhr = new XMLHttpRequest();
		xhr.open('GET','http://www.nbrb.by/API/ExRates/Rates/840?ParamMode=1&onDate=2016-7-5',true);
		
		xhr.send();
		
		xhr.onload = function(){
			console.log(typeof this.responseText);
			console.log(this.responseText);
			let data = JSON.parse(this.responseText);
			for(let key in data) {
				let div =  document.createElement('div');
				div.innerHTML = `${key} - ${data[key]}`;
				//console.log(div);
				table.appendChild(div);
			}
		}
	}
	
}







