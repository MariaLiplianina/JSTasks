'use strict';
window.onload = function(){
	class Person {
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
	}
	
	var p =  new Person(1,2);
	
	console.log(p);
	console.log(p.show());
	console.log(p.setValue(2222,3333));
	console.log(p.show());
}







