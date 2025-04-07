/**
 * @param {any} data
 * @param {Object} command
 */
// const allowedOperations = ['$push', '$set', '$merge', '$apply'];
function update(data, command) {
  const result = Object.entries(command);
  const [key, value] = result[0];

  switch (key) {
    case "$push":
      if (Array.isArray(value) && Array.isArray(data)) {
        data.push(...value);
      } else {
        throw new Error();
      }
      return data;
    case "$set":
      return value;
    case "$merge":
      if (typeof data == "object" && typeof value == "object") {
        data = { ...data, ...value };
      } else {
        throw new Error();
      }
      return data;
    case "$apply":
      if (typeof value == "function") {
        return value(data);
      }
    default:
      data[key] = update(data[key], value);
      return data;
  }
}
