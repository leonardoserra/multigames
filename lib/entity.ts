export default interface Entity {
  update(deltatime: number): void;
  draw(context: CanvasRenderingContext2D): void;
}
