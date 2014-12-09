var $win = $(window);
var $homeSection = $('.section-home');


$win.on('scroll', function () { 
	var scrollPos = $win.scrollTop();

	$homeSection.css('background-position', 'center ' + scrollPos / 3 + 'px');	
});