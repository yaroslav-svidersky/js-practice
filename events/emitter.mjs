export class Emitter {
  constructor() {
    this.events = [];
  }

  on(name, fn) {
    this.events.push({ name, fn });
  }

  emit(name, ...args) {
    let thereWereListeners = false;
    for (const listener of this.events) {
      if (listener.name === name) {
        listener.fn(...args);
        thereWereListeners = true;
      }
    }
    return thereWereListeners;
  }
}
