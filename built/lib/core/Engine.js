export default class Engine {
    currentTimestamp = 0;
    gameContext = null;
    entities = [];
    deltatime = 0;
    // the game loop.
    gameLoop = (timestamp) => {
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
    get canvasElement() {
        return window.document.getElementById("gamewindow");
    }
    get windowWidth() {
        return window.innerWidth;
    }
    get windowHeight() {
        return window.innerHeight;
    }
    initialize() {
        // This built-in ES6 function automatically pass a
        // DOMHighResTimeStamp argument to the gameLoop function
        requestAnimationFrame(this.gameLoop);
        this.initGameContext();
        console.info("Engine Loaded.");
    }
    initGameContext = () => {
        this.canvasElement.width = this.windowWidth;
        this.canvasElement.height = this.windowHeight;
        this.gameContext = this.canvasElement.getContext("2d");
        this.clearFrame();
    };
    clearFrame() {
        if (!this.gameContext)
            return;
        this.gameContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    drawFrame() {
        this.updateEntities();
        this.drawEntities();
    }
    /**
     * state update calculation
     */
    updateEntities() {
        this.entities.forEach(e => e.update(this.deltatime));
    }
    /**
     * drawing in the current frame
     */
    drawEntities() {
        this.entities.forEach(e => e.draw(this.gameContext));
    }
    renderFrame() {
        this.clearFrame();
        this.drawFrame();
    }
}
