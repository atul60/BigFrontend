/* 
This is a follow up on 6. implement basic debounce(), please refer to it for detailed explanation.

In this problem, you are asked to implement an enhanced debounce() which accepts third parameter, option: {leading: boolean, trailing: boolean}

leading: whether to invoke right away
trailing: whether to invoke after the delay.
6. implement basic debounce() is the default case with {leading: false, trailing: true}.

for the previous example of debouncing by 3 dashes

─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G 
with {leading: false, trailing: true}, we get as below

─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G
with {leading: true, trailing: true}:

─ A ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ E ─ ─ ─ ─ ─ ─ G
with {leading: true, trailing: false}

─ A ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ E
with {leading: false, trailing: false}, of course, nothing happens.

notes

please follow above spec. the behavior might not be exactly the same as lodash.debounce()

because window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose.

Something like below will be used to do the test.
*/





// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = {leading: false, trailing: true}) {
    let timeId = null;
    let lastCall = 0;
    return function(...args) {
      let now = Date.now();
  
      if (option.leading && (now - lastCall) - wait >= 0) {
        func(...args);
      } else {
        if(timeId) {
          clearTimeout(timeId);
        } 
  
        timeId = setTimeout(() => {
          if(option.trailing) {
            func(...args);
          }
          timeId = null;
        }, wait);
      }
      lastCall = now;
    }
  }
  
  
  
  