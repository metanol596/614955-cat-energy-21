const form = document.querySelector('.form');
const inputTextRequired = document.querySelectorAll('.form__text-input');
const inputNameRequired = document.querySelector('.form__name-input');
const inputWeightRequired = document.querySelector('.form__weight-input');
const inputEmailRequired = document.querySelector('.form__email-input');
const inputTelRequired = document.querySelector('.form__tel-input');

// inputTextRequired.forEach(function(element) {
//   element.classList.remove('error');
// })
inputWeightRequired.classList.remove('error');
inputEmailRequired.classList.remove('error');
inputTelRequired.classList.remove('error');

form.addEventListener('submit', () => {
  inputTextRequired.forEach(function(element) {
    if (element.value == '' || element.value == null) {
      element.classList.add('error');
    }
  })
})
