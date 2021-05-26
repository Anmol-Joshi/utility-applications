// fetch('https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it')
//   .then((response) => response.json())
//   .then((data) => console.log(data.responseData.translatedText));

const sentenceInput = document.querySelector('#sentence-input');
const sentenceOutput = document.querySelector('#sentence-output');
// console.log(sentenceOutput.value)
// const val = sentenceInput.value;
// sentenceInput.addEventListener('input', () => {
//   const val = sentenceInput.value;
//   console.log(val);
// });
// console.log(val);
const convert = document.querySelector('#convert');
convert.addEventListener('click', () => {
    const val = sentenceInput.value;
    //   console.log(val);
    fetch(`https://api.mymemory.translated.net/get?q=${val}&langpair=en|it`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.responseData.translatedText)
            sentenceOutput.value = data.responseData.translatedText;
        });
});
