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
  return `${a}_${b}_${c}`;
};

// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  const intermediateFn = function (...args) {
    const validArgs = getValidArgs(...args);
    let sortedArgs = validArgs.sort();
    if (sortedArgs.length >= 3) return fn(...sortedArgs);
    return function (...nextArgs) {
      return intermediateFn(...sortedArgs, ...nextArgs);
    };
  };

  return intermediateFn;
}

const getValidArgs = (...args) => {
  return args.filter((arg) => typeof arg == "number");
};

curry.placeholder = Symbol();

/* Failed Test Cases
(_,_,3,4)(1,_)(2,5) spec  TypeError: curry(...)(...)(...) is not a function

*/
