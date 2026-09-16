import Engine from "./core/Engine.js";
import Rectangle, { RectangleState } from "./Rectangle.js";

class Multigames {
  static init(): void {
    const engine: Engine = new Engine();

    engine.entities.push(
      new Rectangle(new RectangleState(100, 100, 300, 200, 0.01)),
    );
  }
}

Multigames.init();
