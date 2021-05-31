// URL Encoder-Decoder
const encodeDecodeURLInput = document.querySelector('#encode-decode-input-url');
const encodeUrl = document.querySelector('#encode-url');
const decodeUrl = document.querySelector('#decode-url');
const encodeDecodeURLOutput = document.querySelector('#encode-decode-output-url');
encodeUrl.addEventListener('click', () => {
    const val = encodeDecodeURLInput.value;
    encodeDecodeURLOutput.value = encodeURIComponent(val);
});
decodeUrl.addEventListener('click', () => {
    const val = encodeDecodeURLInput.value;
    encodeDecodeURLOutput.value = decodeURIComponent(val);
});
