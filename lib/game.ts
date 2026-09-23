import Engine from "./core/engine.js";
import Rectangle, { RectangleState } from "./rectangle.js";

class Game {
  static init(): void {
    const engine: Engine = new Engine();

    engine.entities.push(
      new Rectangle(new RectangleState(800, 300, 100, 100, 0.5)),
    );
  }
}

Game.init();
