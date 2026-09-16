/**
 * Entity State
 * @argument x: position in the x axys
 * @argument y: position in the y axys
 * @argument w: object width
 * @argument h: object height
 * @argument v: velocity, pixels per millisecond
 */
export class RectangleState {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    v = 0;
    constructor(x, y, w, h, v) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.v = v;
    }
}
export default class Rectangle {
    state;
    style = "blue";
    constructor(s) {
        this.state = s;
    }
    update(deltatime) {
        this.state.x += this.state.v * deltatime;
        this.state.y += this.state.v * deltatime;
    }
    draw(context) {
        context.fillStyle = this.style;
        context.fillRect(this.state.x, this.state.y, this.state.w, this.state.h);
    }
}
