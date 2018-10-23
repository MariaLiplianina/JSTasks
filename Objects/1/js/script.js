'use strict';
window.onload = function(){
	let base = {
		info : function(){
			for (var key in this){
				console.log(key + "  " + this[key]);
				
			}
			
			
			return 1;
			
		}
	}
	
	
	let main = {
		show : function(){
			return this.name + " Живет в " + this.city;
		}
	}
	
	let obj =  {
		name: 'Иван',
		city : 'Minsk',
		age: '29',
		
		
	}
	
	let objSuper =  {
		name: '1111',
		city : '2222',
		
		
	}
	
	main.__proto__=base;
	obj.__proto__=main;
	objSuper.__proto__=obj;
	
	console.log(obj);
	
	
	//console.log(obj.name="tests");
	console.log(obj.show());
	console.log(obj.info());
	//delete obj.name;
	console.log(objSuper.show());
	
	//console.log(obj.show());
	/*
	for (var key in obj) {
		console.log(key +"  " +obj[key]);
	}
	
	if("name" in obj){
		console.log(2222);
	}
	
	var newObj = Object.assign({},obj);
	newObj.city = 'tetststst';
	console.log(obj.show());
	console.log(newObj.show());*/
	
}







