$(document).ready(function() {
    // Setup

    // Transform modal box
    $('#modalBox').css({'-moz-transform': 'perspective(800px) rotateX(-45deg) scale(2)'});

    function show() {
	$('#modalBoxWrapper').show();
	$('#modalBox').show();

	$('#modalBoxWrapper').css({'visibility': 'visible',
			    '-moz-transition': 'all 0.8s'});

 	// Animate modal box
	$('#modalBox').css({'-moz-transform': 'perspective(800px) rotateX(0deg) scale(1)',
			    'visibility': 'visible',
			    '-moz-transition': 'all 0.8s'});

	// Scale background
	$('#content').css({'-moz-transform': 'scale(0.8)',
		       '-moz-transition': 'all 0.8s'});
    }

    function hide() {
 	// Animate modal box
	$('#modalBox').css({'-moz-transform': 'perspective(800px) rotateX(-45deg) scale(2)',
			    'visibility': 'hidden',
			    '-moz-transition': 'all 0.8s'});

	$('#modalBoxWrapper').css({'visibility': 'hidden',
			    '-moz-transition': 'all 0.8s'});

	// Scale background
	$('#content').css({'-moz-transform': 'scale(1)',
		       '-moz-transition': 'all 0.8s'});

	// EXPERIMENTAL:
	// Error messages/wrong input could be indicated by a transparent red overlay
	// $('#modalBoxOverlay').css({'background-color': 'rgba(255, 0, 0, 0.5)',
	// 		    '-moz-transition': 'all 0.8s'});

	// $('#modalBoxWrapper').hide();
    }

    $('#openModal').click(function() {
	show();
    });

    $('#closeModal').click(function() {
	hide();
    });

    $('#modalBoxOverlay').click(function() {
	hide();
    });

    // Make the submit button trigger the animation
    // Warning: the animation has to be shorter than roughly 0.5 seconds
    // since the submission triggers a page reload.
    $('input[type="submit"]').click(function() {
	hide();
    });

    // // EXPERIMENTAL
    // $('body').click(function() {
    // 	// $('#content').css({'-moz-transform': 'perspective(800px) rotateY(10deg) scale(0.65) translate(10%)',
    // 	// 		   'transform-origin': '-10% 50%',
    // 	// 		   '-moz-transition': 'all 0.2s'});

    // 	// newParagraph = $('#content:last-child').after('<p>This is a test.</p>');
    // 	$('#content').append('<p>This is a test.</p>');
    // });
});
