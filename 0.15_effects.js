$(document).ready(function(){

	// remove
	$("#hide").click(function(){
		$("#image").remove();
	});

	// show
	$("#show").click(function(){
		$("#image").show();
	});

	$("#toggle").click(function(){
		$("#image").toggle();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});

	$("#fadeOut").click(function(){
		$("#image").fadeOut(5000);
	});

	$("#fadeTo").click(function(){
		$("#image").fadeTo(5000, .5);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 16}, 2000);
	});

	$("#updown").click(function(){
		$("#image").slideUp(2000).slideDown(1000);
	});

	$("#sizechange").click(function(){
		$("#image").animate({
			height: '-=50%',
			width: 	'-=50%'
		});
	});

});



