import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  resetOnHover: true,
  position: 'topCenter',
  transitionIn: 'fadeInDown',
  transitionOut: 'fadeOutUp',
  progressBar: true,
  closeOnEscape: true,
  theme: 'dark',
});

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.target;
  const delay = parseInt(form.delay.value);
  const state = form.state.value;

  createPromise(delay, state)
    .then(message => {
      iziToast.success({
        title: 'OK',
        titleColor: '#fff',
        titleSize: '16px',
        message: message,
        messageColor: 'white',
        iconUrl: './img/green.png',
        backgroundColor: 'green',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16px',
        message: error,
        messageColor: 'white',
        iconUrl: './img/red.png',
        backgroundColor: 'red',
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
