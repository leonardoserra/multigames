export default class Engine {
    static currentTimestamp = 0;
    static gameContext;
    static entities;
    // the game loop.
    static callback = (timestamp) => {
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
    initGameContext = () => {
        Engine.gameContext = this.canvasElement.getContext("2d");
        this.clearGameContext();
    };
    clearGameContext() {
        Engine.gameContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    // ---------------- GETTERS -------------------
    get canvasElement() {
        return window.document.getElementById("gamewindow");
    }
}
