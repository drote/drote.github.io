$(function() {
	var minimizeNavBar = function() {
		if (window.scrollY > 5) {
			$('header a').addClass('smaller');
			$('h1').addClass('smaller');
		} else {
			$('h1').removeClass('smaller');
			$('header a').removeClass('smaller');
		}
	}

	minimizeNavBar();

	$(window).on('scroll', minimizeNavBar);

});