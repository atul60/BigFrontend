
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    return new Promise((resolve, reject) => {
        let pendingPromise = promises.length;
        const results = [];
        if(pendingPromise === 0){
            return resolve(results);
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((result) => {
                results[index] = result;
                pendingPromise--;

                if(pendingPromise === 0) {
                    resolve(results);
                }
            }, reject)
        })
    })
  }