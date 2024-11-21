// copied from lib.es5.d.ts
declare interface Array<T> {
    myReduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    myReduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    myReduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U
  }
  
  Array.prototype.myReduce = function (...args: any[]) {
    const argLength = args.length;
    const arr = this;
    const arrLen = arr.length;
    const hasArgument = argLength > 0;
    const hasInitialValue = args.length > 1;

    if(!hasArgument || (arrLen == 0 && !hasInitialValue)) return new Error();

    const callbackfn = args[0];
    const initialValue = hasInitialValue ? args[1] : arr[0];

    let result = initialValue;
    for(let i = hasInitialValue ? 0 : 1 ; i<arrLen; i++) {
      result = callbackfn(result, arr[i], i, arr);
    }

    return result;
  
  }