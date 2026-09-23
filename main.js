import { Game } from './game.js';

const board = document.getElementById('game-board');

let game;
let intervalId;

const createBoard = () => {
    board.innerHTML = '';

    for (let y = 0; y < game.rows; y++) {
        for (let x = 0; x < game.columns; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            board.appendChild(cell);
        }
    }
};

const render = () => {
    board.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('snake', 'head');
    });

    game.snake.getBody().forEach((segment, index) => {
        const cell = board.querySelector(`[data-x="${segment.x}"][data-y="${segment.y}"]`);

        if (!cell) return;

        cell.classList.add('snake');

        if (index === 0) {
            cell.classList.add('head');
        }
    });
};

const updateGame = () => {
    game.tick();
    render();
};

const startGame = () => {
    game = new Game();
    createBoard();
    render();

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(updateGame, 200);
};

window.addEventListener('keydown', (event) => {
    const keyMap = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
    };

    const direction = keyMap[event.key];
    if (direction) {
        game.setDirection(direction);
    }
});

startGame();