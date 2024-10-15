

/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  for(let [key, value] of Object.entries(command)) {
    switch(key) {
      case '$set':
        return value;
      case '$push':
        data.push(...value);
        return data;
      case '$merge':
      if(!(data instanceof Object))
       throw Error('not possible')
        return {
          ...data,
          ...value
        }
      case '$apply':
        return value(data)
      default:
        if(data instanceof Array) {
          let res = [...data];
          res[key] = update(data[key], value);
          return res;
        } else {
          return {
            ...data,
            [key]: update(data[key], value)
          }
        }
    }
  }

  return data;
    
}

