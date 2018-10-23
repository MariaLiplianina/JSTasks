'use strict';
$(document).ready(function () {
	$( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable",
	 
	  
    }).disableSelection()
	
	 function change(){
		let arr = $( ".connectedSortable a" );
		for (let i = 0; i < arr.length; i++){
			let x = $( ".connectedSortable a" ).attr("data-fancybox");
			function changeDataFancyBox(x) {
		
		if (x == "gallery") $( "#sortable1 a" ).attr("data-fancybox", "gallery2");
		else if (x == "gallery2") $( "#sortable1 a" ).attr("data-fancybox", "gallery");
		
		}
		changeDataFancyBox(x);
		}
		}

	

   



	 		//slick run


	$('.gallery3').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});

  } );
