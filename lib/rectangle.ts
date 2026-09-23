import InputManager from "./core/inputManager.js";
import Entity, { State } from "./interfaces/entity.js";

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
  constructor(x: number, y: number, w: number, h: number, v: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.v = v;
  }
}

enum Keys {
  UP = "KeyW",
  DOWN = "KeyS",
  LEFT = "KeyA",
  RIGHT = "KeyD",
}

export default class Rectangle implements Entity {
  state: RectangleState;
  readonly style = "blue";

  constructor(s: RectangleState) {
    this.state = s;
  }

  private up = (pixels: number) => (this.state.y -= pixels);
  private down = (pixels: number) => (this.state.y += pixels);
  private left = (pixels: number) => (this.state.x -= pixels);
  private right = (pixels: number) => (this.state.x += pixels);

  public update(deltatime: number, input: InputManager): void {
    let pixels: number = this.state.v * deltatime;

    if (input.isDown(Keys.UP)) this.up(pixels);
    if (input.isDown(Keys.DOWN)) this.down(pixels);
    if (input.isDown(Keys.LEFT)) this.left(pixels);
    if (input.isDown(Keys.RIGHT)) this.right(pixels);
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.style;
    context.fillRect(this.state.x, this.state.y, this.state.w, this.state.h);
  }
}
