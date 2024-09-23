/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
    let len = items.length;
    let visitedCount = 0;
    let currIndex = 0, prev = null, nextPrev;
    while(visitedCount < len - 1) {
        if(!prev) prev = items[currIndex];
        if(newOrder[currIndex] != -1) {
            nextPrev = items[newOrder[currIndex]];
            items[newOrder[currIndex]] = prev;
            prev = nextPrev;
            let index = currIndex;
            currIndex = newOrder[currIndex];
            newOrder[index] = -1;
            visitedCount++;
        } else {
            currIndex++;
            prev = null;
        }
    }
    return items;
  }

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]
console.log(sort(A, B))