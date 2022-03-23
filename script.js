const textImage = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');

inputText.addEventListener('input', () => {
  textImage.innerText = inputText.value;
});
