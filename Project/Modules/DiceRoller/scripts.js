const dice = document.getElementById("dice");
const diceNumber = document.getElementById("diceNumber");
var scrambleActive = false;

dice.addEventListener("mouseover", function () {
  if (scrambleActive == false)
    dice.style.animation = "shake 0.1s linear 0s infinite alternate none";
});
dice.addEventListener("mouseout", function () {
  dice.style.animation = "none";
});

dice.addEventListener("mousedown", roll);

function roll() {
  if (scrambleActive == false) {
    scrambleActive = true;
    dice.style.color = "white";
    dice.style.animation = "none";
    randomNum(10, 100);
  }
}

function randomNum(amount, interval) {
  for (let index = 0; index < amount; index++) {
    setTimeout(() => {
      diceNumber.innerHTML = Math.floor(Math.random() * (6 - 1) + 1);
    }, index * interval);
  }
  setTimeout(() => {
    dice.style.color = "rgb(190, 0, 190)";
    diceNumber.innerHTML = Math.floor(Math.random() * (6 - 1) + 1);
  }, amount * interval);

  setTimeout(() => {
    diceNumber.innerHTML = "?";
    dice.style.color = "white";
    scrambleActive = false;
  }, amount * interval + 3000);
}
