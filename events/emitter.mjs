export class Emitter {
  constructor() {
    this.events = new Map();
  }

  on(name, fn) {
    const listeners = this.events.get(name);
    if (listeners === undefined) {
      this.events.set(name, [fn]);
      return;
    }
    listeners.push(fn);
  }

  emit(name, ...args) {
    const listeners = this.events.get(name);
    if (listeners === undefined) {
      return false;
    }
    for (const fn of listeners) {
      fn(...args);
    }
    return true;
  }
}
