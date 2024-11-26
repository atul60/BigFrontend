/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
    var obj = {};
    var res = constructor.call(obj, ...args);

    Object.setPrototypeOf(obj, constructor.prototype);

    if(res && typeof res == 'object') return res;
    return obj;
  }