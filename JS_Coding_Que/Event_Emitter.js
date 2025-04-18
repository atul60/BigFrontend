/* 
There is Event Emitter in Node.js, Facebook once had its own implementation but now it is archived.

You are asked to create an Event Emitter Class

const emitter = new Emitter()
It should support event subscribing

const sub1  = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)
// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback1)
emit(eventName, ...args) is used to trigger the callbacks, with args relayed

emitter.emit('event1', 1, 2);
// callback1 will be called twice
Subscription returned by subscribe() has a release() method that could be used to unsubscribe

sub1.release()
sub3.release()
// now even if we emit 'event1' again, 
// callback1 is not called anymore

*/

// please complete the implementation
class EventEmitter {
  _events;
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
