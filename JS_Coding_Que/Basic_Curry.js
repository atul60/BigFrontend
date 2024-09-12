// This is a JavaScript coding problem from BFE.dev 

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