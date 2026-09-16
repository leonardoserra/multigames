import Entity, { State } from "./interfaces/Entity.js";
/**
 * Entity State
 * @argument x: position in the x axys
 * @argument y: position in the y axys
 * @argument w: object width
 * @argument h: object height
 * @argument v: velocity, pixels per millisecond
 */
export class RectangleState implements State {
  x: number = 0;
  y: number = 0;
  w: number = 0;
  h: number = 0;
  v: number = 0;
  constructor(x:number, y:number, w:number, h:number, v:number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.v = v;
  }
}

export default class Rectangle implements Entity {
  state: RectangleState;
  readonly style = "blue";

  constructor(s: RectangleState) {
    this.state = s;
  }

  update(deltatime: number): void {
    this.state.x += this.state.v * deltatime;
    this.state.y += this.state.v * deltatime;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.style;
    context.fillRect(this.state.x, this.state.y, this.state.w, this.state.h);
  }
}
