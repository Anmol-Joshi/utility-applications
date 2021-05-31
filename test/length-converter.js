const kilometer = document.querySelector('.kilometer');
const mile = document.querySelector('.mile');
kilometer.addEventListener('input', () => {
    mile.value = kilometer.value / 1.60934;
    mile.value = parseFloat(mile.value).toFixed(4);
});
mile.addEventListener('input', () => {
    kilometer.value = mile.value * 1.60934;
    kilometer.value = parseFloat(kilometer.value).toFixed(4);
});
