import { Snake } from './snake.js';
import { createFood } from './food.js';
import { wallCollision, bodyCollision, foodCollision } from "./collission.js";
export class Game {

    constructor() {

        this.rows = 20;
        this.columns = 20;

        this.snake = new Snake();

        this.speed = 150;
        this.score = 0;
        this.direction = 'RIGHT';
        this.nextDirection = 'RIGHT';

        this.running = false;
        this.started = false;

        this.food = createFood(
            this.snake.getBody(),
            this.rows,
            this.columns
        );
    }

    setDirection(direction) {

        if (!this.running) {
            this.start(direction);
            return;
        }

        const opposite = {
            UP: 'DOWN',
            DOWN: 'UP',
            LEFT: 'RIGHT',
            RIGHT: 'LEFT'
        };

        if (opposite[this.direction] === direction) {
            return;
        }

        this.nextDirection = direction;
    }

    start(direction) {

        this.direction = direction;
        this.nextDirection = direction;
        this.snake = new Snake(direction);
        this.score = 0;
        this.food = createFood(
            this.snake.getBody(),
            this.rows,
            this.columns
        );
        this.started = true;
        this.running = true;
    }

    update() {

        if (!this.running) {
            return;
        }

        this.direction = this.nextDirection;

        const movement = {
            UP: { x: 0, y: -1 },
            DOWN: { x: 0, y: 1 },
            LEFT: { x: -1, y: 0 },
            RIGHT: { x: 1, y: 0 }
        };

        const head = this.snake.getHead();
        const newHead = {
            x: head.x + movement[this.direction].x,
            y: head.y + movement[this.direction].y
        };
        
        // Wall collision
        if (wallCollision(newHead, this.rows, this.columns)) {

            this.endGame();
            return;

        }


        // Body collision
        if (bodyCollision(newHead, this.snake.getBody())) {

            this.endGame();
            return;

        }


        // Move snake
        this.snake.move(newHead);


        // Food

        if (foodCollision(newHead, this.food)) {
            this.score++;
            this.food = createFood(
                this.snake.getBody(),
                this.rows,
                this.columns
            );
        }
        else {
            this.snake.removeTail();

        }

    }


    endGame() {

        this.running = false;

    }
}