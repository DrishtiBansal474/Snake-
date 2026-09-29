export class Snake {

    constructor(direction = 'RIGHT') {
        const head = { x: 10, y: 10 };
        const trailingOffset = {
            UP: { x: 0, y: 1 },
            DOWN: { x: 0, y: -1 },
            LEFT: { x: 1, y: 0 },
            RIGHT: { x: -1, y: 0 }
        }[direction];

        this.body = [
            head,
            { x: head.x + trailingOffset.x, y: head.y + trailingOffset.y },
            { x: head.x + trailingOffset.x * 2, y: head.y + trailingOffset.y * 2 }
        ];
    }
    getBody() {

        return this.body;
    }
    getHead() {
        return this.body[0];
    }
    move(newHead) {
        return this.body.unshift(newHead);
    }
    removeTail() {
        return this.body.pop();
    }

    grow(newHead) {
        this.body.unshift(newHead);
    }

}