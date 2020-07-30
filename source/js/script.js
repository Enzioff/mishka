var burger = document.querySelector('.burger');
var menu = document.querySelector('.main-nav__buttom');
var menuWrapper = document.querySelector('.main-nav__buttom');
var button = document.querySelector('.btn-open');
var modal = document.querySelector('.modal');
var btnModal = document.querySelector('.btn--modal');

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

button.addEventListener('click', function () {
  if (modal.classList.contains('modal--close')) {
    modal.classList.remove('modal--close');
    modal.classList.add('modal--open');
  }
})

btnModal.addEventListener('click', function () {
  event.preventDefault;
  modal.classList.remove('modal--open');
  modal.classList.add('modal--close');
})
