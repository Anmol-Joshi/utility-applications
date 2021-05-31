const encodeDecodeBase64Input = document.querySelector('#encode-decode-input-base64');

const encodeBase64 = document.querySelector('#encode-base64');
const decodeBase64 = document.querySelector('#decode-base64');
const encodeDecodeBase64Output = document.querySelector('#encode-decode-output-base64');
encodeBase64.addEventListener('click', () => {
    const val = encodeDecodeBase64Input.value;
    encodeDecodeBase64Output.value = btoa(val);
});
decodeBase64.addEventListener('click', () => {
    const val = encodeDecodeBase64Input.value;
    encodeDecodeBase64Output.value = atob(val);
});
