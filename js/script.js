window.addEventListener('DOMContentLoaded', function() {
	'use strict'

	// <Меню бургер> ========================================================================== 
	const menu = document.querySelector('.menu');
	const burger = document.querySelector('.header__burger');

	function toggleClass(item, className) {
		item.classList.contains(className) 
			? item.classList.remove(className)
			: item.classList.add(className);
	}

	burger.addEventListener('click', function() {
		toggleClass(menu, 'menu--active');
		toggleClass(burger, 'header__burger--active');
	})

	menu.addEventListener('click', function(e) {
		const target = e.target.tagName
		if (target == 'A') {
			menu.classList.remove('menu--active');
			burger.classList.remove('header__burger--active');
		}
	})

	// </Меню бургер> =========================================================================


	// <Слайдер> ========================================================================== 
	let sliderIndex = 1,
		slides = document.querySelectorAll('.reasons__slider-item'),
		dotsWrap = document.querySelector('.slider__dots'),
		dots = document.querySelectorAll('.dot');

		showSlides(sliderIndex);

		function showSlides(n) {
			slides.forEach((item) => item.style.display = 'none');
			dots.forEach((item) => item.classList.remove('dot-active'));

			slides[sliderIndex - 1].style.display = 'block';
			dots[sliderIndex - 1].classList.add('dot-active');
		}

		function currentSlide(n) {
			showSlides(sliderIndex = n);
		}

		dotsWrap.addEventListener('click', function(event) {
			for (let i = 1; i < dots.length +1; i ++) {
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currentSlide(i);
				}
			}

		});


	// </Слайдер> ========================================================================== 

});


