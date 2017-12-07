/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let roundScore, scores, activePlayer, gameActive;

//main score elements
let score0 = document.getElementById("score-0");
let score1 = document.getElementById("score-1");

//round score element
let roundScore0 = document.getElementById("current-0");
let roundScore1 = document.getElementById("current-1");

//dice
//let dice = document.getElementsByClassName("dice")[0];
let dice = document.querySelector(".dice");

//buttons
let buttonNew = document.querySelector(".btn-new");
let buttonHold = document.querySelector(".btn-hold");
let buttonRoll = document.querySelector(".btn-roll");

function start(){
score0.textContent = 0;
score1.textContent = 0;
roundScore0.textContent = 0;
roundScore1.textContent = 0;
dice.style.display = "none";
roundScore = 0;
scores = [0,0];
activePlayer = 0;
gameActive = true;
}
start();
// function addEventListener (evenname){

// }

function nextPlayer(){
    roundScore = 0;
    dice.style.display = "none";

    //for current active player
    //before change
    document.getElementById("current-"+activePlayer).textContent = 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
    
    
    activePlayer = (activePlayer === 0) ? 1 : 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');
}
//change active player


// if (activePlayer === 0){
//     activePlayer = 1;
// }else{
//     activePlayer =
// }
//activePlayer has changed
//the new active player







buttonRoll.addEventListener("click", function(){
    if(!gameActive){
        return;
    }
    let random = Math.floor(Math.random() * 6) + 1;
    dice.src = "dice-"+random+".png";
    dice.style.display = "inline-block";
    
    if(random != 1){
        roundScore += random;

        // if(activePlayer === 0){
        //     roundScore0.textContent = roundScore;
        // }else{
        //     roundScore1.textContent = roundScore;
        // }

        document.getElementById("current-"+activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }
});

function hold(){
    if(!gameActive){
        return;
    }
    scores[activePlayer] += roundScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
        gameActive = false;
        document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner");
        alert(`Player ${activePlayer +1} won the game`);
    }else{
        nextPlayer();
    }
}

buttonHold.addEventListener("click", hold);
buttonNew.addEventListener("click", start);




