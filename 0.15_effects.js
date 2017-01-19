$(document).ready(function(){

	// remove
	$("#hide").click(function(){
		$("#image").remove();
	});

	// show
	$("#image").click(function(){
		$("#show").show("slow", function(){
			
		});
	});
});



