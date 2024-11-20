
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
    let pendingPromise = promises.length;
    const errArr = new Array({length: pendingPromise}).fill(null);
    if(pendingPromise == 0) return Promise.reject([]);
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                pendingPromise--;
                errArr[index] = err;
            })
            .finally(() => {
                if(pendingPromise == 0) reject(new AggregateError('none resolved', errArr));
            })
        })
    })
  }