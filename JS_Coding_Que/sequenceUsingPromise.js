
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
        return funcs.reduce((prev, curr) => {
          return prev.then((v) => {   
            return new Promise((resolve, reject) => {
                  curr((error, data) => {
                          if(error) reject(error)
                          else resolve(data);
                      }, v)
                })
            })
        }, Promise.resolve(data))
        .then(
            (v) => callback(undefined, v),
            (e) => callback(e, data)
        )
        
    }
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