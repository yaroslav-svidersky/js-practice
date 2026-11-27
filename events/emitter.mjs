export class Emitter {
  constructor() {
    this.events = new Map();
  }

  on(name, fn) {
    const events = this.events;
    const listeners = events.get(name);
    if (listeners === undefined) {
      events.set(name, [fn]);
      return;
    }
    listeners.push(fn);
  }

  off(name, fn) {
    const events = this.events;
    const listeners = events.get(name);
    if (listeners === undefined) {
      return;
    }
    const filteredListeners = listeners.filter((mapFn) => mapFn !== fn);
    events.set(name, filteredListeners);
    if (filteredListeners.length === 0) events.delete(name);
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
