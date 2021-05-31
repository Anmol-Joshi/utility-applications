/* eslint-disable radix */
/* eslint-disable no-alert */
const timestampValue = document.querySelector('#timestamp');
const timestampToDate = document.querySelector('#timestamp-to-date');
const date = document.querySelector('#date');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const hours = document.querySelector('#hour');
const minutes = document.querySelector('#minute');
const seconds = document.querySelector('#seconds');
const dateToTimestamp = document.querySelector('#date-to-timestamp');
const unixTimestamp = document.querySelector('#unix-timestamp');
let i = 0;
setInterval(() => {
    i = Math.round(new Date().getTime() / 1000);
    unixTimestamp.innerHTML = i;
}, 1000);
timestampToDate.addEventListener('click', () => {
    // console.log(timestampValue.value.length);
    // eslint-disable-next-line
    if (timestampValue.value.length != 10) {
        alert('Invalid timestamp value');
    }
    const dt = new Date(parseInt(timestampValue.value) * 1000); //
    date.value = dt.getDate();
    month.value = parseInt(dt.getMonth()) + 1;
    year.value = dt.getFullYear();
    hours.value = dt.getHours();
    minutes.value = dt.getMinutes();
    seconds.value = dt.getSeconds();
});
dateToTimestamp.addEventListener('click', () => {
    if (year.value < 1970) {
        alert('Year value cannot be less than 1970');
    }
    const dt = new Date(year.value, month.value - 1, date.value, hours.value, minutes.value, seconds.value);
    timestampValue.value = Math.floor(dt.getTime() / 1000);
});
