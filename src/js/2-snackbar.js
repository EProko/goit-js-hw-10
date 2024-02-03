import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[type="number"]');
const radioButtons = document.querySelectorAll('input[type="radio"]');

form.addEventListener('submit', submitForm);

function submitForm(evt) {
  evt.preventDefault();

  const delayVal = Number(delayInput.value);

  let checkboxValue;
  radioButtons.forEach(radioButton => {
    if (radioButton.checked) {
      checkboxValue = radioButton.value;
    }
  });

  const makePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkboxValue === 'fulfilled') {
        resolve(delayVal);
      } else {
        reject(delayVal);
      }
    }, delayVal);
  });

  makePromise
    .then(delayVal => {
      iziToast.success({
        title: 'ok',
        titleColor: '#FFF',
        messageColor: '#FFF',
        message: `Fulfilled promise in ${delayVal}ms`,
        backgroundColor: '#59A10D',
      });
    })
    .catch(delayVal => {
      iziToast.error({
        title: 'error',
        titleColor: '#FFF',
        messageColor: '#FFF',
        message: `Rejected promise in ${delayVal}ms`,
        backgroundColor: '#EF4040',
      });
    });
  form.reset();
}
