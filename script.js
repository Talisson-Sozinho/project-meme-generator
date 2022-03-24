const inputMemeImage = document.getElementById('meme-insert');
const inputText = document.getElementById('text-input');
const textImage = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image-container');
const newImage = document.getElementById('meme-image');
const buttonContainer = document.getElementById('button-container');
const imagesContainer = document.getElementById('memes-options-container');

function addTextOnImage(event) {
  textImage.innerText = event.target.value;
}

function addImageOnContainer(event) {
  const imageURL = URL.createObjectURL(event.target.files[0]);
  newImage.setAttribute('src', imageURL);
}

function changeBorder(event) {
  const borderOptions = {
    fire: '3px dashed red',
    water: '5px double blue',
    earth: '6px groove green',
  };
  imageContainer.style.border = borderOptions[event.target.id];
}

function changeImage(event) {
  const imageOptions = {
    'meme-1': './imgs/meme1.png',
    'meme-2': './imgs/meme2.png',
    'meme-3': './imgs/meme3.png',
    'meme-4': './imgs/meme4.png',
  };
  newImage.setAttribute('src', imageOptions[event.target.id]);
}

function inicializaInteraction() {
  inputText.addEventListener('input', addTextOnImage);

  inputMemeImage.addEventListener('input', addImageOnContainer);

  buttonContainer.addEventListener('click', changeBorder);

  imagesContainer.addEventListener('click', changeImage);
}

inicializaInteraction();
