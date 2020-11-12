window.addEventListener('DOMContentLoaded', function() {
	'use strict'

	// <Меню бургер> ========================================================================== 
	let menu = document.querySelector('.header__menu'),
	burger = document.querySelector('.menu__burger'),
	close = document.querySelector('.menu__closed');

	burger.addEventListener('click', () => {
	menu.classList.add('active');
	});

	close.addEventListener('click', () => {
	menu.classList.remove('active');
	});
	// </Меню бургер> =========================================================================


	// <Слайдер> ========================================================================== 
	let sliderIndex = 1,
		slides = document.querySelectorAll('.reasons__slider-item'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

		showSlides(sliderIndex);

		function showSlides(n) {
			slides.forEach((item) => item.style.display = 'none');
			dots.forEach((item) => item.classList.remove('dot-active'));

			slides[slideIndex - 1].style.display = 'block';
			dots[sliderIndex - 1].classList.add('dot-active');
		}

	// </Слайдер> ========================================================================== 

});


