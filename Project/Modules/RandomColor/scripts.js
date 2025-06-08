const button = document.getElementById("btn");
const colorShow = document.getElementById("colorShow");

button.addEventListener("mousedown", generate);

function generate() {
  colorString =
    "rgb(" +
    Math.floor(Math.random() * (255 - 1) + 1) +
    ", " +
    Math.floor(Math.random() * (255 - 1) + 1) +
    ", " +
    Math.floor(Math.random() * (255 - 1) + 1) +
    ")";
  document.body.style.backgroundColor = colorString;
  colorShow.innerHTML = colorString;
}

diceNumber.innerHTML = Math.floor(Math.random() * (6 - 1) + 1);
