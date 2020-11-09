$(document).ready(function(){
  $('.reasons__slider').slick({
    dots: true,
    arrows: false
  });

  let menu = document.querySelector('.header__menu'),
    burger = document.querySelector('.menu__burger'),
    close = document.querySelector('.menu__closed');

burger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

});


