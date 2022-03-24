const inputMemeImage = document.getElementById('meme-insert');
const inputText = document.getElementById('text-input');
const textImage = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

inputText.addEventListener('input', (event) => {
  textImage.innerText = event.target.value;
});

inputMemeImage.addEventListener('input', (event) => {
  const newImage = document.getElementById('meme-image');
  const imageURL = URL.createObjectURL(event.target.files[0]);
  newImage.setAttribute('src', imageURL);
});

fireButton.addEventListener('click', () => {
  imageContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  imageContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  imageContainer.style.border = '6px groove green';
});
