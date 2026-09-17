import InputManager from "../core/InputManager.js";

/**
 * Entity State
 * @argument x: position in the x axys
 * @argument y: position in the y axys
 * @argument w: object width
 * @argument h: object height
 * @argument v: velocity, pixels per millisecond
 */
export interface State {
  x: number;
  y: number;
  w: number;
  h: number;
  v: number;
}

export default interface Entity {
  style: string | CanvasGradient | CanvasPattern;
  state: State;
  update(deltatime: number, input: InputManager): void;
  draw(context: CanvasRenderingContext2D): void;
}
