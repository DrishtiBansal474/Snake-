export class Snake {
    constructor() {
        this.body = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 },
        ];
        this.direction = { x: 1, y: 0 };
    }

    getBody() {
        return this.body;
    }

    setDirection(direction) {
        const isOpposite =
            direction.x === -this.direction.x && direction.y === -this.direction.y;

        if (isOpposite) {
            return;
        }

        this.direction = direction;
    }
}