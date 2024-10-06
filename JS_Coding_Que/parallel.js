
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
function parallel(funcs){
    return function(callback, data) {
        const results =  funcs.map((func) => {
            return new Promise((resolve, reject) => {
                return func((error, data) => {
                    if(error) return reject(error);
                    return resolve(data);
                })
            });
        })
        Promise.all(results).then(values => callback(undefined, values)).catch(error => callback(error, data))
    }
  }

  const async1 = (callback) => {
    callback(undefined, 1)
 }
 const async2 = (callback) => {
    callback(undefined, 2)
 }

 const async3 = (callback) => {
    callback(undefined, 3)
 } 

 const all = parallel(
    [
      async1,
      async2,
      async3
    ]
  )
  all((error, data) => {
     console.log(data) // [1, 2, 3]
  }, 1)