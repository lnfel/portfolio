$(function(){

	new WOW().init();

	//$("#navigation").sticky({ topSpacing: 0 });

	$("#preloader").delay("slow").fadeOut("slow");
	$("#load").delay("slow").fadeOut("slow");

	$('body').scrollspy({ target: '.navbar .container' });

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('a[href|="#gallery"]').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	//owl carousel
	$('#owl-works').owlCarousel({
		responsiveClass:true,
		responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5,
        loop:false
      }
    },
	});

	$('#owl-icons').owlCarousel({
		animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:3,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    smartSpeed:450,
	});
	
	//nivo lightbox
	$('.owl-carousel .item a').nivoLightbox({
		effect: 'fadeScale',                             // The effect to use when showing the lightbox
		theme: 'default',                           // The lightbox theme to use
		keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
		clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
		onInit: function(){},                       // Callback when lightbox has loaded
		beforeShowLightbox: function(){},           // Callback before the lightbox is shown
		afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
		beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
		afterHideLightbox: function(){},            // Callback after the lightbox is hidden
		onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
		onNext: function(element){},                // Callback when the lightbox gallery goes to next item
		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});
	
	
	//parallax
  if ($('.parallax').length)
  {
		$(window).stellar({
			responsive:true,
	    scrollProperty: 'scroll',
	    parallaxElements: false,
	    horizontalScrolling: false,
	    horizontalOffset: 0,
	    verticalOffset: 0
		});
  }
});
