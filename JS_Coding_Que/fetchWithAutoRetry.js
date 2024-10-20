
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {

    let retryCount = 0;

    function retryFetch(resolve, reject) {
        fetcher()
        .catch(error => {
            retryCount++;
            if(retryCount > maximumRetryCount)
                return reject(error);
            return retryFetch(resolve, reject);
        })
    }

    // return retryFetch();

    return new Promise((resolve, reject) => {
        return retryFetch(resolve, reject);
    })
  }