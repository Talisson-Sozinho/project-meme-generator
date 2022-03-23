const inputMemeImage = document.getElementById('meme-insert');
const inputText = document.getElementById('text-input');
const textImage = document.getElementById('meme-text');
// const imageContainer = document.getElementById('meme-image-container');

inputText.addEventListener('input', (event) => {
  console.log(event.target.value);
  console.log(textImage.innerHTML);
  textImage.innerHTML = event.target.value;
});

inputMemeImage.addEventListener('input', (event) => {
  const newImage = document.getElementById('meme-image');
  const imageURL = URL.createObjectURL(event.target.files[0]);
  newImage.setAttribute('src', imageURL);
});
