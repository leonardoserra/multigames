import Entity from "../interfaces/Entity.js";
import InputManager from "./InputManager.js";

export default class Engine {
  input: InputManager = new InputManager();
  currentTimestamp: DOMHighResTimeStamp = 0;
  gameContext: CanvasRenderingContext2D | null = null;
  entities: Entity[] = [];
  deltatime: number = 0;

  constructor() {
    this.initialize();
    console.info("Engine running.");
  }

  private get canvasElement(): HTMLCanvasElement {
    return window.document.getElementById("gamewindow") as HTMLCanvasElement;
  }

  private get windowWidth(): number {
    return window.innerWidth * 0.95;
  }

  private get windowHeight(): number {
    return window.innerHeight * 0.97;
  }

  /**
   * the Game Loop.
   */
  private gameLoop = (timestamp: DOMHighResTimeStamp): void => {
    this.deltatime = timestamp - this.currentTimestamp;
    this.currentTimestamp = timestamp;
    this.renderFrame();

    // recursive call for game loop
    requestAnimationFrame(this.gameLoop);
  };

  private initialize() {
    this.initGameContext();
    this.initGameLoop();
  }

  private initGameLoop() {
    // This built-in ES6 function automatically pass a
    // DOMHighResTimeStamp argument to the gameLoop function
    requestAnimationFrame(this.gameLoop);
    console.info("GameLoop started.");
  }

  private initGameContext = (): void => {
    this.canvasElement.width = this.windowWidth;
    this.canvasElement.height = this.windowHeight;

    this.gameContext = this.canvasElement.getContext("2d");

    if (!this.gameContext) return;
    this.clearFrame(this.gameContext);
  };

  private clearFrame(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height,
    );
  }

  private drawFrame(ctx: CanvasRenderingContext2D) {

    this.updateEntities();
    this.drawEntities(ctx);
  }

  /**
   * state update calculation
   */
  private updateEntities() {
    this.entities.forEach((e) => e.update(this.deltatime, this.input));
  }

  /**
   * drawing in the current frame
   */
  private drawEntities(ctx: CanvasRenderingContext2D) {
    this.entities.forEach((e) => e.draw(ctx));
  }

  private renderFrame() {
    const ctx: CanvasRenderingContext2D | null = this.gameContext;
    if (!ctx) return;
    this.clearFrame(ctx);
    this.drawFrame(ctx);
  }
}
