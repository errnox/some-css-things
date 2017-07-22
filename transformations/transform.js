$(document).ready(function() {
    // Animate #testList
    $('#testList li').click(function() {
	$(this).css({'-moz-transform': 'scale(2) translate(10px, -50px)'});
    });

    // Animate #testTable
    $('#testTable td').hover(function() {
	$(this).css({'-moz-transform': 'scale(3) rotate(360deg)',
		     '-moz-transition': 'all 0.5s'});
    },
    function() {
	$(this).css({'-moz-transform': 'scale(1)'});
    });

    $('#testTable td').click(function() {
	$(this).css({'-moz-transform': 'scale(1.5) rotate(160deg) translate(-100px, -50px)',
		     '-moz-transition': 'all 0.5s',
		     'background-color': 'rgba(0, 0,255, 0.5)'});
	// $(this).css({'background-color': 'rgba(255, 0, 0, 0.5)'});
    });

    // Animate #testPar
    $('#testPar').hover(function() {
	$(this).css({'-moz-transform': 'skewX(10deg) skewY(-20deg) scale(2)',
		     '-moz-transition': 'all 1s'});
    },
    function(){
        $(this).css({'-moz-transform': 'skewX(0deg) skewY(0deg) scale(1)'});
    });

    // Animate #testHeading
    $('.testHeading').hover(function() {
	$(this).css({'-moz-transform': 'perspective(800px) rotateY(45deg)',
		     'background-color': '#00EF00',
		     '-moz-transition': 'all 1s'});
    },
    function() {
	$(this).css({'-moz-transform': 'perspective(800px) rotateY(0deg)',
		     'background-color': '#EA3F00'});
    });
});
