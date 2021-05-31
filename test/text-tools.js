/* eslint-disable no-alert */
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const reverse = document.querySelector('#reverse');
const characterCount = document.querySelector('#character-count');
const wordCount = document.querySelector('#word-count');
lowercase.addEventListener('click', () => {
    const stringInput = document.querySelector('#string-input');
    stringInput.value = stringInput.value.toLowerCase();
});
uppercase.addEventListener('click', () => {
    const stringInput = document.querySelector('#string-input');
    stringInput.value = stringInput.value.toUpperCase();
});
reverse.addEventListener('click', () => {
    const stringInput = document.querySelector('#string-input');
    stringInput.value = [...stringInput.value].reverse().join('');
});
characterCount.addEventListener('click', () => {
    const stringInput = document.querySelector('#string-input');
    stringInput.value = stringInput.value.replace(/ +/g, '');
    alert(`Character count:${stringInput.value.length}`);
});
wordCount.addEventListener('click', () => {
    const stringInput = document.querySelector('#string-input');
    stringInput.value = stringInput.value.replace(/  +/g, ' ');
    stringInput.value = stringInput.value.trim();
    alert(`Word count:${stringInput.value.split(' ').length}`);
});
