const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loss: 0,
    tie: 0
};

updateScore();

function playGame(playerMove) {
    const computerMove = computerMoveSelect();
    let result = '';
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You Lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You Lose';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose';
        } else if (computerMove === 'paper') {
            result = 'You Win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You Win') {
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.loss += 1;
    } else if (result === 'Tie') {
        score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move').innerHTML = `You <img src="rock-paper-scissor/${playerMove}-emoji.png">  Computer <img src="rock-paper-scissor/${computerMove}-emoji.png">`;

}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins} Loss:${score.loss} Ties:${score.tie}`;
}

function computerMoveSelect() {
    const value = Math.random();
    let computerMove = '';
    if (value >= 0 && value <= 1 / 3) {
        computerMove = 'rock';
    } else if (value > 1 / 3 && value <= 2 / 3) {
        computerMove = 'paper';
    } else if (value > 2 / 3 && value <= 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}