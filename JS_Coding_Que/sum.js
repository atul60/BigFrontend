function sum(...args) {
  // Promise
  let finalArgs = [...args];
  // let timeId;
  let total = 0;

  function add(nums) {
    return nums.reduce((total, num) => {
      total += num;
      return total;
    }, 0)
  }
  
    const intermediateFn = (...a) => {
        finalArgs = [...finalArgs, ...a];
        total = add(finalArgs);
        return intermediateFn;
    }
    intermediateFn.valueOf = () => {
      return total
    }
    intermediateFn.toString = () => {
      return total
    }
  return intermediateFn;
}


// const sum1 = sum(1)
// sum1(2) == 3 // true
// sum1(3) == 4 // true
// sum(1)(2)(3) == 6 // true
// sum(5)(-1)(2) == 6 // true
console.log(sum(5)(1)(2)(10) == 19)