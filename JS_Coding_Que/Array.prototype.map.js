

Array.prototype.myMap = function(callback, thisArg) {
    const length = this.length;
    const result = [];

    for(let i=0; i<length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }

    return result;

}