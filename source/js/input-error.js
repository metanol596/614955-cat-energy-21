const form = document.querySelector('.form');
const inputTextRequired = document.querySelectorAll('.form__text-input');
const inputNameRequired = document.querySelector('.form__name-input');
const inputWeightRequired = document.querySelector('.form__weight-input');
const inputEmailRequired = document.querySelector('.form__email-input');
const inputTelRequired = document.querySelector('.form__tel-input');

inputTextRequired.forEach(function(element, index) {
  element.classList.remove('error');
})
inputWeightRequired.classList.remove('form__weight-input--error');
inputEmailRequired.classList.remove('form__email-input--error');
inputTelRequired.classList.remove('form__tel-input--error');

form.addEventListener('submit', (e) => {
  inputTextRequired.forEach(function(element, index) {
    if (element === '' || element === null) {
      element.classList.add('error');
      inputTextRequired[index].classList.add('error');
    }
  })
})
