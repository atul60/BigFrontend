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
  const lazyMan = new ALazyMan(name, logFn);
  lazyMan.activities.push({ type: "greet", item: name });

  async function exec() {
    for (let { type, item } of lazyMan.activities) {
      await lazyMan[type](item);
    }
  }

  Promise.resolve().then(exec);

  return {
    eat: (item) => {
      lazyMan.activities.push({ type: "eat", item: item });
      return this;
    },
    sleep: (time) => {
      lazyMan.activities.push({ type: "sleep", item: time });
      return this;
    },
    sleepFirst: (time) => {
      lazyMan.activities.unshift({ type: "sleep", item: time });
      return this;
    },
  };
}

class ALazyMan {
  constructor(name, logFn) {
    this.activities = [];
    this.name = name;
    this.logFn = logFn;
  }

  greet(name) {
    return new Promise((resolve) => {
      this.logFn(`Hi, I'm ${name}.`);
      resolve();
    });
  }

  eat(item) {
    return new Promise((resolve) => {
      this.logFn(`Eat ${item}.`);
      resolve();
    });
  }

  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.logFn(`Wake up after ${time} ${time > 1 ? "seconds" : "second"}.`);
        resolve();
      }, time * 1000);
    });
  }
}

LazyMan("Jack", console.log).eat("banana").sleepFirst(2).eat("apple").sleep(1);
