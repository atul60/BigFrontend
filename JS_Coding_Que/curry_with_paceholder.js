/* his is a follow-up on 1. implement curry()

please implement curry() which also supports placeholder.

Here is an example

const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
const _ = curry.placeholder
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(_, 2)(1, 3) // '1_2_3'
curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3' */

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }

 function curry(fn) {
    const intermediateFn = function(...args) {
      const validArgs = getValidArgs(...args);
      if(validArgs.length >= 3) return fn(...validArgs);
      return function(...nextArgs) {
        return intermediateFn(...nextArgs, ...args);
      }
    }
  
    return intermediateFn;
  }
  
  const getValidArgs = (...args) => {
    return args.filter((arg) => typeof arg == 'number');
  }
  
  
  curry.placeholder = Symbol()

  const curriedJoin = curry(join)
const _ = curry.placeholder
// let ans = curriedJoin(1, 2, 3) // '1_2_3'
let ans = curriedJoin(_, 2)(1, 3) // '1_2_3'
// curriedJoin(_, _, _)(1)(_, 3)(2)

console.log('ans: ', ans);


