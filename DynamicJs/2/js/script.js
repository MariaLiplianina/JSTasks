'use strict';
window.onload = function(){
	
		
	let addRow =  createElement('span','Add Row','but');
	let addCol =  createElement('span','Add Col','but');

	addRow.addEventListener('click', addRowFun);
	addCol.addEventListener('click', addColFun);
	
	
	
	let delRow =  createElement('span','X','but');
	
	
	/*for (let i = 0; i < tds.length; i++){
		let delCol = createElement('span','X','but');
		table.insertAdjacentElement("afterEnd", delCol);
	}*/
	
	
	//delRow.addEventListener('click', delRowFun);
	//delCol.addEventListener('click', delColFun);
	
	
	table.insertAdjacentElement("beforeBegin",addCol);
	table.insertAdjacentElement("beforeBegin",addRow);
	

	
	
	
	//table.insertAdjacentElement("beforeBegin",addRow);
	
	let colTr = random(3,6); //3
	let colTd = random(3,6); //6
	
	for(let i=0;i<colTr;i++){
		let tr = createElement('tr');
		for(let j=0;j<colTd;j++){
			let td = createElement('td',random(10,20));
			td.addEventListener('click',tdCheck);
			td.addEventListener('click',tdConsole);
			//td.onclick=tdCheck;
			
			tr.appendChild(td);
		}
		table.appendChild(tr);
		
	}
	
	
	function tdCheck(){
		this.className = "active";
	}
	
	function tdConsole(){
		console.log(this.innerHTML);
	}
	
	function addRowFun(){
		let td =  document.querySelectorAll("tr:first-child>td");
		let tr = createElement('tr');
		for(let i = 0 ; i<td.length; i++){
			let td = createElement('td',random(10,20));
			td.addEventListener('click',tdCheck);
			td.addEventListener('click',tdConsole);
			tr.appendChild(td);
		}
		
		table.appendChild(tr);
	}
	
	function addColFun(){
		let tr =  document.querySelectorAll("tr");
		for(let i = 0 ; i<tr.length; i++){
			let td = createElement('td',random(10,20));
			td.addEventListener('click',tdCheck);
			td.addEventListener('click',tdConsole);
			tr[i].appendChild(td);
		}
	}
	
	function delColFun(){
		let td =  document.querySelectorAll("tr>td:first-child");
		console.log(td);
		for(let i = 0 ; i<td.length; i++){
			td[i].remove();
		}

	}
	
	function createElement(name="div",info="",className=""){
		let elem = document.createElement(name);
			
			if(info!=""){
				elem.innerHTML =  info;
			}
			
			if(className!=""){
				elem.className = className;
			}
			
			return elem;
	}
	
	
	function random(min=10,max=40){
	
      return  Math.floor( min + Math.random() * (max + 1 - min));
	}
}

	







