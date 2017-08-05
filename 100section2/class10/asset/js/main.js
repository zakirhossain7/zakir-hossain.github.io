jQuery(document).ready(function($) {
	$(".homepage-slides").owlCarousel({
		items:1,
		margin:30,
		loop:true,
		autoplay:true,
		nav:true,
		navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
	});
});