function computerPlay() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random()*moves.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie";
    }

    else if (playerSelection === 'rock' &&  computerSelection === 'paper') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    else if (playerSelection === 'paper' &&  computerSelection === 'scissors') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    else if (playerSelection === 'scissors' &&  computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    else {
        return `Congratulations! ${playerSelection} beats ${computerSelection}`;
    }

}

/* function game() {
    for (let i = 0; i < 5; i++) {
        return playRound('rock', computerPlay());
    }
} */

console.log(game());