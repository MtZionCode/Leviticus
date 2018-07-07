
$(document).ready(function() {
	// on mouse press-down give a depth effect
	$(".whatever").mousedown(e => { 
	  $("#box").addClass("effectClick")
	});

	// on up-release remove effect
	$(".whatever").mouseup(e => {
	  $("#box").removeClass("effectClick")
	});
});