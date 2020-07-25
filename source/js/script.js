var burger = document.querySelector('.burger');
var menu = document.querySelector('.main-nav__buttom');
var menuWrapper = document.querySelector('.main-nav__buttom');

menuWrapper.classList.remove('main-nav--nojs');

burger.addEventListener('click', function () {
  if (burger.classList.contains('burger--close')) {
    burger.classList.remove('burger--close');
    burger.classList.add('burger--active');
    menu.classList.remove('main-nav__button--close');
    menu.classList.add('main-nav__button--open');
  } else {
    burger.classList.remove('burger--active');
    burger.classList.add('burger--close');
    menu.classList.remove('main-nav__button--open');
    menu.classList.add('main-nav__button--close');
  }
});
