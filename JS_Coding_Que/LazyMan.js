/* 
LazyMan is very lazy, he only eats and sleeps.

LazyMan(name: string, logFn: (log: string) => void) would output a message, the passed logFn is used.

LazyMan('Jack', console.log)
// Hi, I'm Jack.
He can eat(food: string)

LazyMan('Jack', console.log)
  .eat('banana')
  .eat('apple')
// Hi, I'm Jack.
// Eat banana.
// Eat Apple.
He also sleep(time: number), time is based on seconds.

LazyMan('Jack', console.log)
  .eat('banana')
  .sleep(10)
  .eat('apple')
  .sleep(1)
// Hi, I'm Jack.
// Eat banana.
// Wake up after 10 seconds.
// Eat Apple.
// Wake up after 1 second.
He can sleepFirst(time: number), which has the highest priority among all tasks, no matter what the order is.

LazyMan('Jack', console.log)
  .eat('banana')
  .sleepFirst(10)
  .eat('apple')
  .sleep(1)
// Wake up after 10 seconds.
// Hi, I'm Jack.
// Eat banana
// Eat apple
// Wake up after 1 second.

*/


// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
    const lazyClass = new AlazyMan(logFn);
    lazyClass.task.push(['greet', name])

    async function exec() {
      let result;
      for(let [event, variable] of lazyClass.task) {
        result = await lazyClass[event](variable);
      }
    }

    Promise.resolve().then(exec);
    
    // setTimeout(() => {
    //   for(let item of runOrder) {
    //     logFn(item);
    //   }
    // }, 0)

    return {
      eat: function(name) {
        lazyClass.task.push(['eat', name])
        return this;
      },
      sleep: function(time) {
        lazyClass.task.push(['sleep', time]);
        return this;
      },
      sleepFirst: function(time) {
        lazyClass.task.unshift(['sleepFirst', time]);
        return this;
      }
    }
}

class AlazyMan {
  constructor(log) {
    this.log = log;
    this.task = []
  }
  greet(name) {
    return new Promise((resolve) => {
      this.log(`Hi, I'm ${name}.`);
      resolve();
    })
  }
  eat(fruit) {
    return new Promise((resolve) => {
      this.log(`Eat ${fruit}.`);
      resolve();
    })
  }
  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.log(`Wake up after ${time} ${time > 1 ? 'seconds' : 'second'}.`);
        resolve();
      }, time*1000)
    })
  }
  sleepFirst(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.log(`Wake up after ${time} ${time > 1 ? 'seconds' : 'second'}.`);
        resolve();
      }, time*1000)
    })
  }
}

LazyMan('Jack', console.log)
  .eat('banana')
  .sleepFirst(10)
  .eat('apple')
  .sleep(1)
// Wake up after 10 seconds.
// Hi, I'm Jack.
// Eat banana
// Eat apple
// Wake up after 1 second.