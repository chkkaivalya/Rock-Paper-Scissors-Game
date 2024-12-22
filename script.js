document.addEventListener('DOMContentLoaded', () => {
    const rpsChoices = ['Rock', 'Paper', 'Scissors'];
    const buttons = document.querySelectorAll('.btn');
    const computerMoveEl = document.getElementById('computer-move');
    const outcomeEl = document.getElementById('outcome');
    const playAgainBtn = document.getElementById('play-again');

    let playerMove = '';
    let computerMove = '';

    function getComputerMove() {
        return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    }

    function determineOutcome(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === 'Rock' && computer === 'Scissors') ||
            (player === 'Paper' && computer === 'Rock') ||
            (player === 'Scissors' && computer === 'Paper')
        ) {
            return "You won!";
        } else {
            return "You lost!";
        }
    }

    function playGame(playerChoice) {
        playerMove = playerChoice;
        computerMove = getComputerMove();

        computerMoveEl.textContent = `Computer's Move: ${computerMove}`;
        outcomeEl.textContent = `Outcome: ${determineOutcome(playerMove, computerMove)}`;
        playAgainBtn.style.display = 'block';
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playGame(button.textContent);
        });
    });

    playAgainBtn.addEventListener('click', () => {
        computerMoveEl.textContent = "Computer's Move: ";
        outcomeEl.textContent = "Outcome: ";
        playAgainBtn.style.display = 'none';
    });
});
