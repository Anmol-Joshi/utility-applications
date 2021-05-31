/* eslint-disable radix */
/* eslint-disable no-alert */
/* eslint-disable no-bitwise */
// window.onload = () => {
const hexValue = document.querySelector('#hex-input');
const red = document.querySelector('#red-input');
const green = document.querySelector('#green-input');
const blue = document.querySelector('#blue-input');
hexValue.addEventListener('input', () => {
    const val = hexValue.value;
    const bigint = parseInt(val, 16);
    red.value = (bigint >> 16) & 255;
    green.value = (bigint >> 8) & 255;
    blue.value = bigint & 255;
});
red.addEventListener('input', () => {
    if (red.value === '') {
        red.value = '0';
    }
    if (red.value > 255) {
        alert('Value greater than 255 entered in red');
    }
    if (red.value < 0) {
        alert('Value less than 0 entered in red');
    }
    if (green.value === '') {
        green.value = '0';
    }
    if (green.value > 255) {
        alert('Value greater than 255 entered in green');
    }
    if (green.value < 0) {
        alert('Value less than 0 entered in green');
    }
    if (blue.value === '') {
        blue.value = '0';
    }
    if (blue.value > 255) {
        alert('Value greater than 255 entered in blue');
    }
    if (blue.value < 0) {
        alert('Value less than 0 entered in blue');
    }
    let r = parseInt(red.value);
    let g = parseInt(green.value);
    let b = parseInt(blue.value);
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length === 1) {
        r = `0${r}`;
    }
    if (g.length === 1) {
        g = `0${g}`;
    }
    if (b.length === 1) {
        b = `0${b}`;
    }
    hexValue.value = r + g + b;
});
green.addEventListener('input', () => {
    if (red.value === '') {
        red.value = '0';
    }
    if (red.value > 255) {
        alert('Value greater than 255 entered in red');
    }
    if (red.value < 0) {
        alert('Value less than 0 entered in red');
    }
    if (green.value === '') {
        green.value = '0';
    }
    if (green.value > 255) {
        alert('Value greater than 255 entered in green');
    }
    if (green.value < 0) {
        alert('Value less than 0 entered in green');
    }
    if (blue.value === '') {
        blue.value = '0';
    }
    if (blue.value > 255) {
        alert('Value greater than 255 entered in blue');
    }
    if (blue.value < 0) {
        alert('Value less than 0 entered in blue');
    }
    let r = parseInt(red.value);
    let g = parseInt(green.value);
    let b = parseInt(blue.value);
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length === 1) {
        r = `0${r}`;
    }
    if (g.length === 1) {
        g = `0${g}`;
    }
    if (b.length === 1) {
        b = `0${b}`;
    }
    hexValue.value = r + g + b;
});
blue.addEventListener('input', () => {
    if (red.value === '') {
        red.value = '0';
    }
    if (red.value > 255) {
        alert('Value greater than 255 entered in red');
    }
    if (red.value < 0) {
        alert('Value less than 0 entered in red');
    }
    if (green.value === '') {
        green.value = '0';
    }
    if (green.value > 255) {
        alert('Value greater than 255 entered in green');
    }
    if (green.value < 0) {
        alert('Value less than 0 entered in green');
    }
    if (blue.value === '') {
        blue.value = '0';
    }
    if (blue.value > 255) {
        alert('Value greater than 255 entered in blue');
    }
    if (blue.value < 0) {
        alert('Value less than 0 entered in blue');
    }
    let r = parseInt(red.value);
    let g = parseInt(green.value);
    let b = parseInt(blue.value);
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length === 1) {
        r = `0${r}`;
    }
    if (g.length === 1) {
        g = `0${g}`;
    }
    if (b.length === 1) {
        b = `0${b}`;
    }
    hexValue.value = r + g + b;
});
hexValue.addEventListener('input', () => {
    if ((hexValue.value === '') | ((hexValue.value.length > 6) | (hexValue.value.length === 4))) {
        document.querySelector('*').style.backgroundColor = '#f8f9fa';
        document.querySelector('body').style.backgroundColor = '#f8f9fa';
        document.querySelector('h1').style.backgroundColor = '#f8f9fa';
        document.querySelector('.input-output-group').style.backgroundColor = '#f8f9fa';
        document.querySelector('.below-navbar').style.backgroundColor = '#f8f9fa';
    } else {
        document.querySelector('*').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('body').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('h1').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('.input-output-group').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('.below-navbar').style.backgroundColor = `#${hexValue.value}`;
    }
});
red.addEventListener('input', () => {
    if (hexValue.value === '') {
        document.querySelector('*').style.backgroundColor = '#f8f9fa';
        document.querySelector('body').style.backgroundColor = '#f8f9fa';
        document.querySelector('h1').style.backgroundColor = '#f8f9fa';
        document.querySelector('.input-output-group').style.backgroundColor = '#f8f9fa';
        document.querySelector('.below-navbar').style.backgroundColor = '#f8f9fa';
    } else {
        document.querySelector('*').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('body').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('h1').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('.input-output-group').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('.below-navbar').style.backgroundColor = `#${hexValue.value}`;
    }
});
blue.addEventListener('input', () => {
    if (hexValue === '') {
        document.querySelector('*').style.backgroundColor = '#f8f9fa';
        document.querySelector('body').style.backgroundColor = '#f8f9fa';
        document.querySelector('h1').style.backgroundColor = '#f8f9fa';
        document.querySelector('.input-output-group').style.backgroundColor = '#f8f9fa';
        document.querySelector('.below-navbar').style.backgroundColor = '#f8f9fa';
    } else {
        document.querySelector('*').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('body').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('h1').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('.input-output-group').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('.below-navbar').style.backgroundColor = `#${hexValue.value}`;
    }
});
green.addEventListener('input', () => {
    if (hexValue === '') {
        document.querySelector('*').style.backgroundColor = '#f8f9fa';
        document.querySelector('body').style.backgroundColor = '#f8f9fa';
        document.querySelector('h1').style.backgroundColor = '#f8f9fa';
        document.querySelector('.input-output-group').style.backgroundColor = '#f8f9fa';
        document.querySelector('.below-navbar').style.backgroundColor = '#f8f9fa';
    } else {
        document.querySelector('*').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('body').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('h1').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('.input-output-group').style.backgroundColor = `#${hexValue.value}`;
        document.querySelector('.below-navbar').style.backgroundColor = `#${hexValue.value}`;
    }
});
