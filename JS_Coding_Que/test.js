const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

function curry(fn) {
  let reqArg = 3;

  const callBack = (...args) => {
    reqArg -= args.length;
    if (reqArg <= 0) {
      return fn(...args.slice(0, 3));
    } else {
      return (...newArgs) => callBack(...args, ...newArgs);
    }
  };

  return callBack;
}

const curriedJoin = curry(join)(1, 2);

console.log(curriedJoin(3));
console.log(curriedJoin(4));
