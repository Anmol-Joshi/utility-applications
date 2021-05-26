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
// const encodeDecodeBase64Input = document.querySelector(
//   "#encode-decode-input-base64"
// );
// const encodeBase64 = document.querySelector("#encode-base64");
// const decodeBase64 = document.querySelector("#decode-base64");
// const encodeDecodeBase64Output = document.querySelector(
//   "#encode-decode-output-base64"
// );
// encodeBase64.addEventListener("click", (event) => {
//   const val = encodeDecodeBase64Input.value;
//   encodeDecodeBase64Output.value = btoa(val);
// });
// decodeBase64.addEventListener("click", (event) => {
//   const val = encodeDecodeBase64Input.value;
//   encodeDecodeBase64Output.value = atob(val);
// });
