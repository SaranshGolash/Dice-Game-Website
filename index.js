function getNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let randomNumber1 = getNum(1,6);
let randomDiceImage = "dice" + randomNumber1 + ".png";
let imageSource = "images/" + randomDiceImage;
document.getElementById("dice1").setAttribute("src", imageSource);
let randomNumber2 = getNum(1,6);
let randomDiceImage2= "dice" + randomNumber2 + ".png";
let imageSource2 = "images/" + randomDiceImage2;
document.getElementById("dice2").setAttribute("src", imageSource2);
if(randomNumber1 > randomNumber2)
    document.getElementById("h1").innerHTML = "Player 1 Wins";
else if(randomNumber1 === randomNumber2)
    document.getElementById("h1").innerHTML = "Draw!";
else
document.getElementById("h1").innerHTML = "Player 2 Wins!"