window.addEventListener('load', () => {
    const decimalInput = document.querySelector('#decimal-input');
    const binaryInput = document.querySelector('#binary-input');
    const hexInput = document.querySelector('#hex-input');
    const octalInput = document.querySelector('#octal-input');
    decimalInput.addEventListener('input', () => {
        const val = decimalInput.value;
        if (val === '') {
            binaryInput.value = '';
            hexInput.value = '';
            octalInput.value = '';
        } else {
            binaryInput.value = parseInt(val, 10).toString(2);
            hexInput.value = parseInt(val, 10).toString(16);
            octalInput.value = parseInt(val, 10).toString(8);
        }
    });
    binaryInput.addEventListener('input', () => {
        const val = binaryInput.value;
        if (val === '') {
            decimalInput.value = '';
            hexInput.value = '';
            octalInput.value = '';
        } else {
            decimalInput.value = parseInt(val, 2).toString(10);
            hexInput.value = parseInt(val, 2).toString(16);
            octalInput.value = parseInt(val, 2).toString(8);
        }
    });
    hexInput.addEventListener('input', () => {
        const val = hexInput.value;
        if (val === '') {
            decimalInput.value = '';
            binaryInput.value = '';
            octalInput.value = '';
        } else {
            decimalInput.value = parseInt(val, 16).toString(10);
            binaryInput.value = parseInt(val, 16).toString(2);
            octalInput.value = parseInt(val, 16).toString(8);
        }
    });
    octalInput.addEventListener('input', () => {
        const val = octalInput.value;
        if (val === '') {
            decimalInput.value = '';
            binaryInput.value = '';
            hexInput.value = '';
        } else {
            decimalInput.value = parseInt(val, 8).toString(10);
            binaryInput.value = parseInt(val, 8).toString(2);
            hexInput.value = parseInt(val, 8).toString(16);
        }
    });
});
