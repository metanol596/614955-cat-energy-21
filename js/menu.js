const headerMain = document.querySelector('.page-header')
const navToggle = document.querySelector('.page-header__toggle');
const navMain = document.querySelector('.main-nav');

headerMain.classList.remove('page-header--nojs');
headerMain.classList.remove('page-header--bg-opened-menu');
navToggle.classList.remove('page-header__toggle--nojs');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('page-header__toggle--closed')) {
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
    navMain.classList.add('main-nav--opened');
    headerMain.classList.add('page-header--bg-opened-menu');
  } else {
    if (navToggle.classList.contains('page-header__toggle--opened')) {
      navToggle.classList.remove('page-header__toggle--opened');
      navMain.classList.remove('main-nav--opened');
      navToggle.classList.add('page-header__toggle--closed');
      navMain.classList.add('main-nav--closed');
      headerMain.classList.remove('page-header--bg-opened-menu');
    }
  }
})
