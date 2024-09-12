/* 
There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array. Please implement your own.

const arr = [1, [2], [3, [4]]];
flat(arr)
// [1, 2, 3, [4]]
flat(arr, 1)
// [1, 2, 3, [4]]
flat(arr, 2)
// [1, 2, 3, 4]

 */

let arr = [1, [2], [3, [4, [5, [6, 7]]]]];

function flat(arr, depth = 1) {
    if(depth <= 0) return arr;
    const result = [];
    arr.forEach((item) => {
        if(Array.isArray(item)) {
            return result.push(...flat(item, depth - 1));
        } else return result.push(item);
    })

    return result;
}