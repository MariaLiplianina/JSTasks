'use strict';
window.onload = function(){
	let arrayMain = {

		random : function(n, min, max){
			for(let i = 0; i < n; i++){
				 var rand = min + Math.random() * (max + 1 - min);
					 rand = Math.floor(rand);
					this.data.push(rand);
			}
			this.checkSum();
		},
		
		show: function (x){
			return this.data.join(x);
		},
		
		remove: function(i){
			if(/^\d+$/.test(i)){
				if(i < this.data.length) this.data.splice(i, 1);
			}
			this.checkSum();
			return this;
		},

		insert: function(y){
			if(/^\d+$/.test(y)){
				this.data.push(y);
			}
			this.checkSum();
			return this;
		},

		sumMeth: function(){
			this.sum = 0;
			for (let i = 0; i < this.data.length; i++) {
				this.sum += +this.data[i];
			}
			return this.sum;
		},

		min: function(){
			var min = this.data[0];
			for (let i = 0; i < this.data.length; i++) {
				if (min > this.data[i]) min = this.data[i];
			}
			return min;
		},

		max: function(){
			var max = this.data[0];
			for (let i = 0; i < this.data.length; i++) {
				if (max < this.data[i]) max = this.data[i];
			}
			return max;
		},

		checkSum: function(){
			this.sumMeth();
			return this.sum;
		},

		
	}
	
	let mas = {
		data : [],
		sum: null,
	}
	
	mas.__proto__= arrayMain;
	
	mas.random(10, 1, 15);
	console.log(mas.show(' - '));
	mas.sumMeth();
	console.log("СУММА " + mas.sum);
	console.log("MIN " + mas.min());
	console.log("MAX " + mas.max());
	mas.insert(+prompt('введите число'));
	mas.remove(+prompt('введите число'));
	console.log(mas.show(' - '));
	console.log("СУММА " + mas.sum);


}







