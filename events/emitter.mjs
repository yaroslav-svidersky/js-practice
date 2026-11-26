export class Emitter {
  constructor() {
    this.events = [];
  }

  on(name, fn) {
    this.events.push([name, fn]);
  }

  emit(name, ...args) {
    let thereWereListeners = false;
    for (const listener of this.events) {
      if (listener[0] === name) {
        listener[1](...args);
        thereWereListeners = true;
      }
    }
    return thereWereListeners;
  }
}
