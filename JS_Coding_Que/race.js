
const async1 = (callback) => {
    setTimeout(() => callback(undefined, 1), 300)
 }
 const async2 = (callback) => {
     setTimeout(() => callback(undefined, 2), 100)
 }
 const async3 = (callback) => {
    setTimeout(() => callback(undefined, 3), 200)
 }

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

 function race(funcs){
    return (callback, data) => {
      const promiseReuslts = funcs.map((func) => {
         return new Promise((resolve, reject) => {
            func((error, data) => {
               if(error) return reject(error);
               return resolve(data);
            })
         })
      })

      Promise.race(promiseReuslts).then(result => callback(undefined, result)).catch(error => callback(error, data));
    }
  }
 
 const first = race(
    [
      async1,
      async2,
      async3
    ]
  )
  first((error, data) => {
     console.log(data) // 2, since 2 is the first to be given
  }, 1)
  