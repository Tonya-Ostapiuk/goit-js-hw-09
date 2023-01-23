import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const textInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector("button[data-start]");
const timerClock = document.querySelector('.timer');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

const options = {
    enableTime: true,
    // Вмикає засіб вибору часу
    time_24hr: true,
    defaultDate: new Date(),
    // Встановлює початкові вибрані дати.
    minuteIncrement: 1,
    // Регулює крок для введення хвилин (включно з прокручуванням)
    onClose(selectedDates) {
        if(selectedDates[0] < new Date()){
        Notiflix.Notify.failure("Please choose a date in the future");
        startBtn.disabled = true;
        } else {
        startBtn.disabled = false;
        };
    }
};

flatpickr(textInput, options);

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
};
  
  console.log(convertMs(2000)); 
  console.log(convertMs(140000)); 
  console.log(convertMs(24140000)); 

function addLeadingZero(value) {
      return value.toString().padStart(2 ,'0');
};


startBtn.addEventListener('click', () => {
  let timer = setInterval(() => {
    let countdown = new Date(textInput.value) - new Date();
    startBtn.disabled = true;

    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      days.textContent = addLeadingZero(timeObject.days);
      hours.textContent = addLeadingZero(timeObject.hours);
      minutes.textContent = addLeadingZero(timeObject.minutes);
      seconds.textContent = addLeadingZero(timeObject.seconds);

      if (seconds.textContent <= 0) {
        Notiflix.Notify.success('The countdown is complete');
      document.body.style.background = 'Gold';
      clearInterval(timer);
       }
    }
  }, 1000);
});