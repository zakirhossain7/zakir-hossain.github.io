jQuery(document).ready(function($) {

	var homepageSlides = $(".homepage-slides");

	homepageSlides.owlCarousel({
		items:1,
		margin:30,
		loop:true,
		autoplay:true,
		nav:true,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});

	homepageSlides.on('translate.owl.carousel', function(event) {
	    $(".welcome-area-text h4").removeClass("animated slideInDown");
	    $(".welcome-area-text h1").removeClass("animated slideInRight");
	    $(".welcome-area-text p").removeClass("animated slideInUp");
	})

	homepageSlides.on('translated.owl.carousel', function(event) {
	    $(".welcome-area-text h4").addClass("animated slideInDown");
	    $(".welcome-area-text h1").addClass("animated slideInRight");
	    $(".welcome-area-text p").addClass("animated slideInUp");
	})	
});