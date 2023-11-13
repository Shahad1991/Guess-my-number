'use strict';
/*console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = `Correct Number`;

document.querySelector(".number").textContent = `13`;
document.querySelector(".score").textContent = `10`;


document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
// document.querySelector(".number").textContent = secretNumber;
//for at se nummret

document.querySelector(".check").addEventListener("click", function () {
    const guess = document.querySelector(".guess").value;
    // ingen nummer 
    if (!guess) {
        document.querySelector(".message").textContent = "No Number";


        // rigtig nummer   winner
    } else if (guess == secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        // når den er for høj
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You are lost";
            score--;
            document.querySelector(".score").textContent = 0;

        }
        // når den er for lav
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You are lost";
            score--;
            document.querySelector(".score").textContent = 0;

        }

    }

});


const againButton = document.querySelector(".again");

function restartFunktion() {

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

    document.querySelector(".score").textContent = "20";
    document.querySelector(".message").textContent = "Start Guessing !!!!";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
}

againButton.addEventListener("click", restartFunktion);


