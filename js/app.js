$(document).ready(function() {

	var vids;

	$.ajax({
		url: 'js/betterness.json',
		dataType: 'json',
		async: false,
		success: function(data){
			vids = data;
		},
		error: function() {
			return 'Failed to find betterness :(';
		}
	});

	function new_vid() {
		var betterness = vids.betterness,
			vidId = betterness[Math.floor(Math.random()*betterness.length)],
			viewURL = 'https://www.youtube.com/embed/' + vidId + '?rel=0&autoplay=1&controls=0&showinfo=0&iv_load_policy=3&wmode=transparent',
			viewer = $('#betterness');

		viewer.attr('src', viewURL);
	}


	$('.more').click(function(){
		new_vid();
		var wrapper = $('.wrapping');
		if (wrapper.hasClass('is-visible')) {
			wrapper
				.slideUp(500)
				.slideDown(500);
		}
		_gaq.push(['_trackPageview', 'more-button.htm']);
		return false;
	});

	$('.more').one('click', function(){
		$(this)
			// .delay(0)
			.animate({
				margin: 0
			}, 500)
			.removeClass('pulse');
		$('.wrapping')
			.slideDown(500)
			.removeClass('is-hidden')
			.addClass('is-visible');
		$('.footer').fadeIn(1000);
	});

 });