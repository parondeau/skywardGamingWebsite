var scrollingTop = false;
var scrollingAbout = false;
var scrollingContact = false;
function scrollToTop(){
	$("#home").click(function() {
   	 	if (scrollingTop) return;
   	 	$('html, body').animate({
    		scrollTop: 0
    	}, 500);
		scrollingTop = true;
	});
	scrollingTop = false;
}
function scrollToAbout(){
	$("#aboutButton").click(function() {
   	 	if (scrollingAbout) return;
   	 	$('html, body').animate({
    		scrollTop: $("#aboutSection").offset().top - 50
    	}, 500);
		scrollingAbout = true;
	});
	scrollingAbout = false;
}
function scrollToContact(){
	$("#contactButton").click(function() {
   	 	if (scrollingContact) return;
   	 	$('html, body').animate({
    		scrollTop: $("#contactSection").offset().top - 50
    	}, 500);
    	scrollingContact = true;
	});
	scrollingContact = false;
}