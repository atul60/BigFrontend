

Array.prototype.myMap = function(callback, thisArg) {
    const length = this.length;
    const result = [];

    console.log('this', this);
    
    for(let i=0; i<length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }

    return result;

}

const arr = new Array(5)
arr[0] = 1
arr[2] = undefined
arr[4] = null

console.log(arr.myMap((item, index) => item + index))