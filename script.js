// Random selection of computer move
function computerSelection() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random()*moves.length)];
}

// TODO
function playAnimation () {   
}

//TODO
function selectImage () {

}

// Plays a round of game
function playRound() {
    let computerMove = computerSelection();
    let playerMove = this.id;

    if (playerMove === computerMove) {
        document.querySelector('.results').textContent = "Tie"
        return "Tie"
    }

    else if (playerMove === 'rock' &&  computerMove === 'paper') {
        document.querySelector('.results').textContent = "Lost"
        return "Lost";
    }

    else if (playerMove === 'paper' &&  computerMove === 'scissors') {
        document.querySelector('.results').textContent = "Lost"
        return "Lost";
    }

    else if (playerMove === 'scissors' &&  computerMove === 'rock') {
        document.querySelector('.results').textContent = "Lost"
        return "Lost";
    }

    else {
        document.querySelector('.results').textContent = "Won"
        return "Won";
    }
}

let Buttons = document.querySelectorAll("button");
    Buttons.forEach(button => button.addEventListener("click", playRound));
