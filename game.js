import { Snake } from './snake.js';

export class Game {
    constructor(rows = 20, columns = 20) {
        this.rows = rows;
        this.columns = columns;
        this.snake = new Snake();
    }

    setDirection(direction) {
        this.snake.setDirection(direction);
    }

    tick() {
        const head = this.snake.getBody()[0];
        const nextHead = {
            x: head.x + this.snake.direction.x,
            y: head.y + this.snake.direction.y,
        };

        this.snake.body.unshift(nextHead);
        this.snake.body.pop();

        return true;
    }
}
