/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
  // your code here
  const len1 = arr1.length;
  const len2 = arr2.length;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  const intersection = [];
  while (i < len1 && j < len2) {
    if (arr1[i] == arr2[j]) {
      intersection.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return intersection;
}
