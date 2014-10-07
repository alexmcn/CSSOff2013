$(document).ready(function() {
	$(".bullets dd").slabText(); 
	$(".borders header h1, .borders header p").slabText(); 
	$(".transforms h1").slabText(); 
	$(".transforms cite").slabText(); 
	$(".transforms li").slabText(); 
	if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
		skrollr.init();
	}
});