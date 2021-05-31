const sentenceInput = document.querySelector('#sentence-input');
const sentenceOutput = document.querySelector('#sentence-output');
const convert = document.querySelector('#convert');
convert.addEventListener('click', () => {
    const val = sentenceInput.value;
    fetch(`https://api.mymemory.translated.net/get?q=${val}&langpair=en|it`)
        .then((response) => response.json())
        .then((data) => {
            sentenceOutput.value = data.responseData.translatedText;
        });
});
