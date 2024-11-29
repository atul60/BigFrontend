/* 
168. move zeros
JavaScript
Algorithm

medium  2416 accepted / 8633 tried

ads via Carbon
Build your website for just $3.88/mth. More value and performance with Namecheap.
ads via Carbon
Given an array of integers, move zeros to the end while keeping the order of the rest.

You should make the in-place change.

const list = [1,0,0,2,3]
moveZeros(list) 
console.log(list) // [1,2,3,0,0]
What is the time & space complexity of your approach?
*/


// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
    let numberIdx = 0;
    for(let index=0; index<list.length; index++) {
        if(list[index] != 0) {
            [list[numberIdx++], list[index]] = [list[index], list[numberIdx]];    
        }
    }
  }
  
  
  