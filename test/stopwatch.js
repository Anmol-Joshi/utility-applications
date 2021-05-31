/* eslint-disable radix */
const hour = document.querySelector('#hour');
const min = document.querySelector('#minute');
const sec = document.querySelector('#seconds');
const start = document.querySelector('#start-timer');
const reset = document.querySelector('#reset-timer');
let flag = 0;
let interval;

reset.addEventListener('click', () => {
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    clearInterval(interval);
    flag = 0;
    start.value = 'start';
});
start.addEventListener('click', () => {
    if (flag === 0) {
        flag = 1;
        start.value = 'stop';
        interval = setInterval(() => {
            if (sec.value >= 59) {
                sec.value = 0;
                min.value = parseInt(min.value) + 1;
                if (min.value >= 59) {
                    min.value = 0;
                    hour.value = parseInt(hour.value) + 1;
                }
            } else {
                sec.value = parseInt(sec.value) + 1;
            }
        }, 1000);
    } else {
        flag = 0;
        start.value = 'start';
        clearInterval(interval);
    }
});
