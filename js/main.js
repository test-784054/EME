// (function($) {

// 	"use strict";

// 	var fullHeight = function() {

// 		$('.js-fullheight').css('height', $(window).height());
// 		$(window).resize(function(){
// 			$('.js-fullheight').css('height', $(window).height());
// 		});

// 	};
// 	fullHeight();

// 	var burgerMenu = function() {

// 		$('.js-colorlib-nav-toggle').on('click', function(event) {
// 			event.preventDefault();
// 			var $this = $(this);
// 			if( $('body').hasClass('menu-show') ) {
// 				$('body').removeClass('menu-show');
// 				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
// 			} else {
// 				$('body').addClass('menu-show');
// 				setTimeout(function(){
// 					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
// 				}, 900);
// 			}
// 		})
// 	};
// 	burgerMenu();


// })(jQuery);

// (function($) {
// 	"use strict";

// 	var fullHeight = function() {
// 		$('.js-fullheight').css('height', $(window).height());
// 		$(window).resize(function(){
// 			$('.js-fullheight').css('height', $(window).height());
// 		});
// 	};
// 	fullHeight();

// 	var burgerMenu = function() {

// 		function toggleMenu(event) {
// 			event.preventDefault();
// 			if( $('body').hasClass('menu-show') ) {
// 				$('body').removeClass('menu-show');
// 				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
// 			} else {
// 				$('body').addClass('menu-show');
// 				setTimeout(function(){
// 					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
// 				}, 900);
// 			}
// 		}

// 		// Click on hamburger
// 		$('.js-colorlib-nav-toggle').on('click', toggleMenu);

// 		// Click on "Menu" text
// 		$('.menu_heading').on('click', toggleMenu);
// 	};
// 	burgerMenu();

// })(jQuery);
(function($) {
	"use strict";

	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	var burgerMenu = function() {

		function toggleMenu(event) {
			event.preventDefault();
			var $nav = $('#colorlib-main-nav');

			if( $('body').hasClass('menu-show') ) {
				// Close menu
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');

				// Remove animations so they can trigger next time
				$nav.find('.col-lg-8 li, .col-lg-4 > div').removeClass('animate__animated animate__fadeInDown animate__fadeInUp');
			} else {
				// Open menu
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);

				// Animate left column items (top → bottom)
				$nav.find('.col-lg-8 li').each(function(i){
					$(this).css({
						'animation-delay': (0.5 + i*0.5) + 's',
						'animation-duration': '1.5s'
					}).addClass('animate__animated animate__fadeInDown');
				});

				// Animate right column items (bottom → top)
				$nav.find('.col-lg-4 > div').each(function(i){
					$(this).css({
						'animation-delay': (0.5 + i*0.5) + 's',
						'animation-duration': '1.2s'
					}).addClass('animate__animated animate__fadeInUp');
				});
			}
		}

		// Click on hamburger
		$('.js-colorlib-nav-toggle').on('click', toggleMenu);

		// Click on "Menu" text
		$('.menu_heading').on('click', toggleMenu);
	};
	burgerMenu();

})(jQuery);
