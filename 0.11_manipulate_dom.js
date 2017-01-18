$(document).ready(function() {

	// adding Text
	var content = "I added this text!";
	$("#divText").append(content);

	// changing text color
	$("#styled").css("color", "green");

	//adding classes to children
	$("#adding-class").addClass("add-class");
});