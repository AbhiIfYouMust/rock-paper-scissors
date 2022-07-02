let user = 0;
let comp = 0; 

// Random selection of computer move
function computerSelection() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random()*moves.length)];
}

// Plays a round of game
function playRound() {
    if (user > 4) {
        document.querySelector('.results').textContent = "Congratulations! You won the game! Press enter to restart.";

        document.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                document.location.reload();
            }
        });
    }

    else if (comp > 4) {
        document.querySelector('.results').textContent = "Computer won the game! Press enter to restart.";

        document.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                document.location.reload();
            }
        });
    } 

    else {    
        let computerMove = computerSelection();

        // Button is the current object 
        let playerMove = this.id;

        let CompImg = document.querySelector("#comp");
        let UserImg = document.querySelector("#user");

        CompImg.setAttribute("src", `${computerMove}M.PNG`);
        UserImg.setAttribute("src", `${playerMove}.PNG`);

        if (playerMove === computerMove) {
            document.querySelector("#user1").textContent = `You: ${user}`;
            document.querySelector("#comp1").textContent = `computer: ${comp}`;
            document.querySelector('.results').textContent = "Tie";
            return "Tie";
        }

        else if (playerMove === 'rock' &&  computerMove === 'paper') {
            comp++;
            document.querySelector("#user1").textContent = `You: ${user}`;
            document.querySelector("#comp1").textContent = `computer: ${comp}`;
            document.querySelector('.results').textContent = "You lost";
            return "Lost";
        }

        else if (playerMove === 'paper' &&  computerMove === 'scissors') {
            comp++;
            document.querySelector("#user1").textContent = `You: ${user}`;
            document.querySelector("#comp1").textContent = `computer: ${comp}`;
            document.querySelector('.results').textContent = "You lost";
            return "Lost";
        }

        else if (playerMove === 'scissors' &&  computerMove === 'rock') {
            comp++;
            document.querySelector("#user1").textContent = `You: ${user}`;
            document.querySelector("#comp1").textContent = `computer: ${comp}`;
            document.querySelector('.results').textContent = "You lost";
            return "Lost";        
        }

        else {
            user++;
            document.querySelector('.results').textContent = "You won";
            document.querySelector("#user1").textContent = `You: ${user}`;
            document.querySelector("#comp1").textContent = `computer: ${comp}`;
            return "Won";
        }
    }        
}


let Buttons = document.querySelectorAll("button");
Buttons.forEach(button => button.addEventListener("click", playRound));