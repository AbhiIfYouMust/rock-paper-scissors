// Random selection of computer move
function computerSelection() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random()*moves.length)];
}

// TODO
function playAnimation () {   
}

// Plays a round of game
function playRound() {
    let computerMove = computerSelection();

    // Button is the current object 
    let playerMove = this.id;
    
    let CompImg = document.querySelector("#comp");
    let UserImg = document.querySelector("#user");

    CompImg.setAttribute("src", `/compGUI/${computerMove}M.png`);
    UserImg.setAttribute("src", `/userGUI/${playerMove}.png`);

    if (playerMove === computerMove) {
        document.querySelector('.results').textContent = "Tie";
        return "Tie";
    }

    else if (playerMove === 'rock' &&  computerMove === 'paper') {
        document.querySelector('.results').textContent = "Lost";
        return "Lost";
    }

    else if (playerMove === 'paper' &&  computerMove === 'scissors') {
        document.querySelector('.results').textContent = "Lost";
        return "Lost";
    }

    else if (playerMove === 'scissors' &&  computerMove === 'rock') {
        document.querySelector('.results').textContent = "Lost";
        return "Lost";
    }

    else {
        document.querySelector('.results').textContent = "Won";
        return "Won";
    }
}

let Buttons = document.querySelectorAll("button");
Buttons.forEach(button => button.addEventListener("click", playRound));
