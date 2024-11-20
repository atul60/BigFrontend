
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    let pendingPromises = promises.length;
    if(pendingPromises == 0) return Promise.resolve([]);
    const promisesResult = new Array({length: pendingPromises}).fill(null);
    return new Promise((resolve, reject) => {
            promises.forEach((promise, index) => {
                Promise.resolve(promise)
                .then((res) => {
                    promisesResult[index] = {status: "fulfilled", value: res};
                })
                .catch(err => {
                    promisesResult[index] = {status: "rejected", reason: err}
                })
                .finally(() => {
                    pendingPromises--;
                    if(pendingPromises == 0)
                        resolve(promisesResult);
                })
            })
    });
  }
  
  