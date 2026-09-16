import Engine from "./core/Engine.js";
import Rectangle, { RectangleState } from "./Rectangle.js";
class Multigames {
    static init() {
        const engine = new Engine();
        engine.entities.push(new Rectangle(new RectangleState(100, 100, 300, 200, 0.01)));
    }
}
//test
Multigames.init();
