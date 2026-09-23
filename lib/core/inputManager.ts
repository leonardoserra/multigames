export default class InputManager {
  private state: Record<string, boolean> = {};

  constructor() {
    // listen to released keys
    document.addEventListener("keyup", (event) => {
      this.state[event.code] = false;
    });

    // listen to pressed keys
    document.addEventListener("keydown", (event) => {
      this.state[event.code] = true;
    });
  }

  public isDown(code: string): boolean {
    return this.state[code] ?? false;
  }
}
