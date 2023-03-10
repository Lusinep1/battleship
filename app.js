const gamesBoardContainer = document.querySelector('#gamesboard-container');
const optionContainer = document.querySelector('.options-container');
const flipButton = document.querySelector('#flip-button');


// VARIABLES

let angle = 0;

// FUNCTIONS

function flip() {
    // get every child element
    const optionShips = Array.from(optionContainer.children);
    // if (angle === 0) {
    //     angle = 90;
    // } else {
    //     angle = 0;
    // }
    angle = angle === 0 ? 90 : 0; // same thing as above

    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`);
}


// Creating Board

const width = 10;

function createBoard(color, user) {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color;

    gameBoardContainer.id = user;

    gamesBoardContainer.append(gameBoardContainer)
}
createBoard('yellow', 'player')
createBoard('pink', 'computer')

// EVENTS

flipButton.addEventListener('click', flip)