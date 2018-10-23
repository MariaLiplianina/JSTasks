'use strict';
$(document).ready(function () {
	let x = 12;
	$('#run').click(function () {
		x+=5
		/*.slideUp()
		.slideDown()
		.hide()
		.show()
		.fadeIn()
		.fadeOut()

		.slideToggle()
		.toggle()
		.fadeToggle()*/

		$('#show').fadeToggle(600);
		$('#show p').css({
				'color':'red',
				'font-size':`${x}px`
		}).attr({
			'data-title':x,
			'align':'center',
			'style':'color:blue'
		});

		$('.test').css('color',function (i,val) {
			if($(this).html().indexOf('my')!=-1){
				return "green"
			}
			else {
				return "red"
			}
		})

		$("script:eq(1)").removeAttr('src');



		//.text()
		//.html()

		//Для работы с мультиклассами
		/*.addClass()
		.removeClass()
		.toggleClass()*/

		//console.log($('#show p:eq(0)').css('color'))
	})


	$('#collapse').click(function (){
		console.log(1);
		$('.collapseBox:eq(0)').toggleClass('show');
	})

})
