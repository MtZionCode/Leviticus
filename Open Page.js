

$(document).ready(function(){
	// on mouse press
	$(".container-fluid").mousedown(e => { 
	   $('.circle, .rectangle').addClass("glow-off")
	})

	// on up (mouse release)
	$(".container-fluid").mouseup(e => {
	   $('.circle, .rectangle').removeClass("glow-off")
	})
  
  $(".container-fluid").mousedown(e => { 
	   $('.vertical-rectangle').addClass("glow-off2")
	})

	// on up (mouse release)
	$(".container-fluid").mouseup(e => {
	   $('.vertical-rectangle').removeClass("glow-off2")
	})

	  $(".container-fluid").mouseup(e => {
    var url = window.location.href;
    window.location = "file:///D:/Web%20Development/Which%20One%20Are%20You.html";
  	});
});