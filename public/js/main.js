var scrollingTop = false;
var scrollingAbout = false;
var scrollingContact = false;
function scrollToTop(){
 	$('html, body').animate({
		scrollTop: 0
	}, 500);
}
function scrollToAbout(){
 	$('html, body').animate({
		scrollTop: $("#aboutSection").offset().top - 50
	}, 500);
}
function scrollToContact(){
 	$('html, body').animate({
    		scrollTop: $("#contactSection").offset().top - 50
	}, 500);
}