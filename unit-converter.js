const celsiusToFahrenheit = document.querySelector('#celsius-fahrenheit');
const fahrenheitToCelsius = document.querySelector('#fahrenheit-celsius');
const mileToKilometer = document.querySelector('#mile-kilometer');
const kilometerToMile = document.querySelector('#kilometer-mile');

celsiusToFahrenheit.addEventListener('click', () => {
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    output.value = input.value * (9 / 5) + 32;
});
fahrenheitToCelsius.addEventListener('click', () => {
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    output.value = (input.value - 32) * (5 / 9);
});
mileToKilometer.addEventListener('click', () => {
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    output.value = input.value * 1.60934;
});
kilometerToMile.addEventListener('click', () => {
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    output.value = input.value / 1.60934;
});
