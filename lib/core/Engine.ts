import Entity from "../interfaces/Entity.js";

export default class Engine {
  currentTimestamp: DOMHighResTimeStamp = 0;
  gameContext: CanvasRenderingContext2D | null = null;
  entities: Entity[] = [];
  deltatime: number = 0;

  // the game loop.
  gameLoop = (timestamp: DOMHighResTimeStamp): void => {
    this.deltatime = timestamp - this.currentTimestamp;

    console.log(this.deltatime);

    this.currentTimestamp = timestamp;

    this.renderFrame();

    // recursive call for game loop
    requestAnimationFrame(this.gameLoop);
  };

  constructor() {
    this.initialize();
    console.info("Engine Created.");
  }

  get canvasElement(): HTMLCanvasElement {
    return window.document.getElementById("gamewindow") as HTMLCanvasElement;
  }

  get windowWidth() {
    return window.innerWidth;
  }

  get windowHeight() {
    return window.innerHeight;
  }

  private initialize() {
    // This built-in ES6 function automatically pass a
    // DOMHighResTimeStamp argument to the gameLoop function
    requestAnimationFrame(this.gameLoop);
    this.initGameContext();

    console.info("Engine Loaded.");
  }

  private initGameContext = (): void => {
    this.canvasElement.width = this.windowWidth;
    this.canvasElement.height = this.windowHeight;

    this.gameContext = this.canvasElement.getContext("2d");

    this.clearFrame();
  };

  private clearFrame() {
    if (!this.gameContext) return;

    this.gameContext.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height,
    );
  }

  private drawFrame() {
    this.updateEntities();
    this.drawEntities();
  }

  /**
   * state update calculation
   */
  private updateEntities() {
    this.entities.forEach((e) => e.update(this.deltatime));
  }

  /**
   * drawing in the current frame
   */
  private drawEntities() {
    this.entities.forEach((e) => e.draw(this.gameContext));
  }

  private renderFrame() {
    this.clearFrame();
    this.drawFrame();
  }
}
