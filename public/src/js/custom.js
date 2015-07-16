
//
$(document).ready(function() {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'scrollingSpeed': 600,
		'autoScrolling': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
	});

	function checkWidth() {
		var buttonsize = $('.asigra-btn').width();
		var windowsize = $(window).width();

		if(windowsize <= 1210 && windowsize > 980) {
			$('.btn-lg').css("font-size", "14px");
		
		}
		else if (windowsize <= 610 && windowsize > 430) {
			$('.btn-lg').css("font-size","12px");
		}
		else if (windowsize <= 430) {
			$('.btn-lg').css("font-size","8px");	
		}
		else {
			$('.btn-lg').css("font-size", "16px");
		}

		$('.cc-btn').width(buttonsize);
		$('.uwo-btn').width(buttonsize);
	}
	checkWidth();
	$(window).resize(checkWidth);	
});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})
