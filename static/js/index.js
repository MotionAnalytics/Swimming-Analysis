window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

	// Initialize angle & orientation carousel with slower autoplay
	bulmaCarousel.attach('#angle-orientation-carousel', {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 8000 // slower (8s) between slides
	});

	// Initialize results carousel (keep original 5s speed)
	bulmaCarousel.attach('#results-carousel', {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000
	});
	
    bulmaSlider.attach();

})
