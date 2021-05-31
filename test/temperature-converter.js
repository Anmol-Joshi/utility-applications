const celsius = document.querySelector('.celsius');
const fahrenheit = document.querySelector('.fahrenheit');
celsius.addEventListener('input', () => {
    fahrenheit.value = celsius.value * (9 / 5) + 32;
    fahrenheit.value = parseFloat(fahrenheit.value).toFixed(4);
});
fahrenheit.addEventListener('input', () => {
    celsius.value = (fahrenheit.value - 32) * (5 / 9);
    celsius.value = parseFloat(celsius.value).toFixed(4);
});
