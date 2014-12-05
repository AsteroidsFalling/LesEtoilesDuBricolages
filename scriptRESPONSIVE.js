$( document ).ready(function() {
    $("#nav-toggle").click(function() {
			$('nav').toggleClass("nav-active");
			$('body').toggleClass("body-active");
	});
});