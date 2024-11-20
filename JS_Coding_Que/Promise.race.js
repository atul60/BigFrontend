
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
        })
    })
  }