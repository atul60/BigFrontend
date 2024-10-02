
/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs){
    return function(callback, data) {
           const len = funcs.length;
        //    let func1 = funcs[0];
        //    let func2 = funcs[1];
        //    func1((error, data) => {
        //     if(error) return callback(error, data);
        //     func2(callback, data);
        //    }, data);
        resultedFun(callback, funcs, len, 0, data)
        
        }
}

const resultedFun = (callback, funcs, len, index, data) => {
    if(index === len-1) {
        return funcs[index](callback, data)
    }
    funcs[index]((error, data) => {
        if(error) return callback(error, data);
        resultedFun(callback, funcs, len, index+1, data);
    }, data);
}

const asyncTimes1 = (callback, num) => {
    setTimeout(() => callback(null, num * 2), 100)
 }

 const asyncTimes2 = (callback, num) => {
    setTimeout(() => callback(null, num + 10), 100)
 }

 const asyncTimes3 = (callback, num) => {
    setTimeout(() => callback(null, num*3), 100)
 }

const asyncTimes4 = sequence(
    [
      asyncTimes1,
      asyncTimes2,
      asyncTimes3
    ]
  )
  asyncTimes4((error, data) => {
     console.log(data) // 4
  }, 4)