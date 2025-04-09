// please complete the implementation
class EventEmitter {
  private _events;
  constructor() {
    this._events = new Map();
  }

  subscribe(eventName, callback) {
    let callbackIndex;
    if (!this._events.get(eventName)) {
      this._events.set(eventName, []);
    }

    const eventRegistery = this._events.get(eventName);
    eventRegistery.push(callback);
    callbackIndex = eventRegistery.length - 1;

    return {
      release: () => {
        this._events.set(eventName, [
          ...this._events.get(eventName).slice(0, callbackIndex),
          ...this._events.get(eventName).slice(callbackIndex + 1),
        ]);
      },
    };
  }

  emit(eventName, ...args) {
    if (this._events.has(eventName)) {
      const events = this._events.get(eventName);

      events.forEach((event) => event(...args));
    }
  }
}
