Array.prototype.myMap = function (callback, thisArg = this) {
  // Initialize the length of the array and a new result array
  const length = this.length;
  const result = new Array(length);

  // Iterate over each element in the array
  for (let i = 0; i < length; i++) {
    // Check if the current index exists in the array for Sparse Arrays
    if (i in this) {
      // Apply the callback function to the current element
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  // Return the new array with transformed elements
  return result;
};
