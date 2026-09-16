import Entity from "./entity.js";

export default class Engine {
  static currentTimestamp: DOMHighResTimeStamp = 0;
  static gameContext: CanvasRenderingContext2D;
  static entities: Entity[];
  // the game loop.
  static callback = (timestamp: DOMHighResTimeStamp): void => {
    console.log("delta: ", timestamp - Engine.currentTimestamp);
    Engine.currentTimestamp = timestamp;

    // recursive call for game loop
    requestAnimationFrame(this.callback);
  };

  constructor() {
    console.info("Engine Created.");
  }

  initialize() {
    // This built-in ES6 function automatically pass a
    // DOMHighResTimeStamp argument to the callback function
    requestAnimationFrame(Engine.callback);
    this.initGameContext();

    console.info("Engine Loaded.");
  }

  // ---------------- PRIVATE -------------------
  private initGameContext = (): void => {
    Engine.gameContext = this.canvasElement.getContext(
      "2d",
    ) as CanvasRenderingContext2D;

    this.clearGameContext()
  };

  clearGameContext() {
    Engine.gameContext.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height,
    );
  }

  // ---------------- GETTERS -------------------
  get canvasElement(): HTMLCanvasElement {
    return window.document.getElementById("gamewindow") as HTMLCanvasElement;
  }
}
