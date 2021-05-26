/* eslint-disable no-bitwise */
/* eslint-disable no-alert */
const hour = document.querySelector('#hour');
const min = document.querySelector('#minute');
const sec = document.querySelector('#seconds');
const start = document.querySelector('#start-timer');
const reset = document.querySelector('#reset-timer');
let interval;
reset.addEventListener('click', () => {
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    clearInterval(interval);
});
min.addEventListener('input', () => {
    if (min.value > 60 || min.value < 0) {
        alert('Wrong value entered in min');
    }
});
sec.addEventListener('input', () => {
    if (sec.value > 60 || sec.value < 0) {
        alert('Wrong value entered in sec');
    }
});
hour.addEventListener('input', () => {
    if (hour.value < 0) {
        alert('Wrong value entered in hour');
    }
});
let flag = 0;
start.addEventListener('click', () => {
    if (flag === 0) {
        flag = 1;
        // const start = document.querySelector('#start-timer');
        start.value = 'stop';
        interval = setInterval(() => {
            if ((sec.value === 0) & ((min.value > 0) | (hour.value > 0))) {
                if (min.value > 0) {
                    sec.value = 59;
                    min.value -= 1;
                } else if (hour.value > 0) {
                    hour.value -= 1;
                    min.value = 59;
                    sec.value = 59;
                }
            } else if (sec.value <= 0) {
                clearInterval(interval);
                flag = 0;
                start.value = 'start';
                alert('timer ended');
            } else {
                sec.value -= 1;
            }
        }, 1000);
    } else {
        flag = 0;
        start.value = 'start';
        clearInterval(interval);
    }
});
