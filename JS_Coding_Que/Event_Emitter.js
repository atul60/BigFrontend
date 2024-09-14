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
    constructor() {
      this.map = new Map();
    }
  
    subscribe(eventName, callback) {
      if(!this.map.get(eventName)) {
        this.map.set(eventName, []);
      } 
      const callbacks = this.map.get(eventName);
      callbacks.push(callback);
      this.map.set(eventName, callbacks);
  
      function release() {
        callbacks.pop();
        this.map.set(eventName, callbacks)
      }
  
      return {
        release: release.bind(this)
      }
    }
    
    emit(eventName, ...args) {
        const callbacks = this.map.get(eventName);
      callbacks.forEach((callback) => callback(...args));
    }
  }