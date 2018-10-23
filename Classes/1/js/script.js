'use strict';
window.onload = function(){
	function Person ( name, surname){
		this.name = name;
		this.surname = surname;
		
		
	}
	
	Person.prototype.show = function(){

			return this.name + " - " +this.surname;

		
			
	}
	
	Person.prototype.setValue = function(name,surname){

		this.name =  name;
		this.surname =  surname;

		
			
	}
	
	
	
	var p = new Person('test','test 2');
		
	
	
	var p2 = new Person('123','test 123');
	var p3 = new Person('456','test 456');
	console.log(p);
	console.log(p2);
	console.log(p3);
	console.log(p3.show());
	p3.setValue('new1','new2');
	console.log(p3.show());
}







