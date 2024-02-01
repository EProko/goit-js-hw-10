import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log(selectedDates[0]);
    checkData(userSelectedDate);
  },
};
flatpickr(dateInput, options);

function checkData() {
  if (Date.now() >= userSelectedDate.getTime()) {
    iziToast.show({
      title: 'Error',
      titleColor: '#FFF',
      titleSize: '16',
      message: 'Please choose a date in the future',
      messageColor: '#FFF',
      messageSize: '16',
      backgroundColor: '#EF4040',
      position: 'topRight',
      icon: 'ico-error',
      iconColor: '#FFF',
    });
    startBtn.disabled = true;
    return false;
  } else {
    startBtn.disabled = false;
    return true;
  }
}

let IntervId;

startBtn.addEventListener('click', startTimer);

function startTimer() {
  const confirmationDate = checkData(userSelectedDate);

  if (!confirmationDate) {
    return;
  }

  if (!IntervId) {
    IntervId = setInterval(updateTimerValue, 1000);
  }

  function updateTimerValue() {
    const timerValue = userSelectedDate - Date.now();
    const time = convertMs(timerValue);
    timeLeft(time);

    if (
      time.days === 0 &&
      time.hours === 0 &&
      time.minutes === 0 &&
      time.seconds === 0
    ) {
      stopTimer();
    }
  }
  startBtn.disabled = true;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function stopTimer() {
  clearInterval(IntervId);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function timeLeft({ days, hours, minutes, seconds }) {
  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}
