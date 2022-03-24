const inputMemeImage = document.getElementById('meme-insert');
const inputText = document.getElementById('text-input');
const textImage = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

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

meme1.addEventListener('click', () => {
  const newImage = document.getElementById('meme-image');
  newImage.setAttribute('src', './imgs/meme1.png');
});

meme2.addEventListener('click', () => {
  const newImage = document.getElementById('meme-image');
  newImage.setAttribute('src', './imgs/meme2.png');
});

meme3.addEventListener('click', () => {
  const newImage = document.getElementById('meme-image');
  newImage.setAttribute('src', './imgs/meme3.png');
});

meme4.addEventListener('click', () => {
  const newImage = document.getElementById('meme-image');
  newImage.setAttribute('src', './imgs/meme4.png');
});
