// This is a JavaScript coding problem from BFE.dev 

/*
Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'
*/


/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {

    const intermediateFn = function(...args) {
  
        if(args.length >= 3) {
          return fn(...args.slice(0, 3));
        } else {
          return function(...args1) {
            return intermediateFn(...args, ...args1)
          }
        }
    }
  
    return intermediateFn;
  }