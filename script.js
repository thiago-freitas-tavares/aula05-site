var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "imagens/" + randomDiceImage; //imagens/dice1.png - imagens/dice6.png
var image1 = document.querySelectorAll("img")[0]; // primeiro <img> do html
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "imagens/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//condições de vitória e empate
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Venceu!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Venceu!";
}
else {
  document.querySelector("h1").innerHTML = "<i>Empate!</i>";
}