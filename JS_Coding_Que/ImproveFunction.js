
/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
    return items.filter(item => {
      let result = true;
      excludes.forEach(pair => {
        if(item[pair.k] === pair.v) {
          result = false;
          return;
        };
      })
  
      return result;
    })
  }