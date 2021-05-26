const hashInput = document.querySelector('#hash-input');
// const hash = document.querySelector('#hash');
const md5HashOutput = document.querySelector('#md5-hash-output');
const sha1HashOutput = document.querySelector('#sha1-hash-output');
const sha256HashOutput = document.querySelector('#sha256-hash-output');
const sha512HashOutput = document.querySelector('#sha512-hash-output');
hashInput.addEventListener('input', () => {
    const val = hashInput.value;
    if (val === '') {
        md5HashOutput.value = '';
        sha1HashOutput.value = '';
        sha256HashOutput.value = '';
        sha512HashOutput.value = '';
    } else {
        md5HashOutput.value = window.CryptoJS.MD5(val);
        sha1HashOutput.value = window.CryptoJS.SHA1(val);
        sha256HashOutput.value = window.CryptoJS.SHA256(val);
        sha512HashOutput.value = window.CryptoJS.SHA512(val);
    }
});
