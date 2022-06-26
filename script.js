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

function game() {
    let user = 0;
    let comp = 0;

    for (let i = 0; i < 5; i++) {
        results = playRound(window.prompt('Rock, paper or scissors'), computerPlay())
        console.log(results)

        if (results.slice(0,2) === 'Yo') {
            comp++
        }

        else if (results.slice(0,2) === 'Co') {
            user++;
        }
    }

    if (user > comp) {
        return 'Player wins'
    }

    else if (comp > user) {
        return 'Computer wins'
    }

    else {
        return "It's a tie"
    }
}

console.log(game());