var $win = $(window);
var $homeSection = $('.section-home');


$win.on('scroll', function () { 
	var scrollPos = $win.scrollTop();

	$homeSection.css('background-position', 'center ' + scrollPos / 3 + 'px');	
});

function hover(element) {
    element.setAttribute('src', 'images/happy-cloud.png');
}
function unhover(element) {
    element.setAttribute('src', 'images/sad-cloud.png');
}