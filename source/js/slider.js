// Слайдер на главной сранице

const review = document.querySelector('.review');
const itemSlides = document.querySelectorAll('.review__slider-item');
const buttonsSliderState = document.querySelectorAll('.review__slider-state');
const toggleSliderState = document.querySelector('.review__toggle');
const removeSliderActiveState = function () {
  itemSlides.forEach(function(item) {
    item.classList.remove('active');
  })
  buttonsSliderState.forEach(function(btn) {
    btn.classList.remove('active');
  })
}

review.classList.remove('review--bg-change')
toggleSliderState.classList.remove('moving');

buttonsSliderState.forEach(function(element, index) {
  element.addEventListener('click', function () {
    removeSliderActiveState();
    element.classList.add('active');
    itemSlides[index].classList.add('active');
    if (index == 1) {
      review.classList.add('review--bg-change');
      toggleSliderState.classList.add('moving');
    } else {
      review.classList.remove('review--bg-change');
      toggleSliderState.classList.remove('moving');
    }
  })
})
