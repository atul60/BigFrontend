/* 4. implement basic throttle()
JavaScript
Lodash
Google
Flipkart
met this in an interview?
 50
Add to my list
Share

medium  15483 accepted / 66513 tried

 Well done!You have solved it!unsubmit

ads via Carbon
Design and Development tips in your inbox. Every weekday.
ads via Carbon
Throttling is a common technique used in Web apps, in most cases using lodash solution would be a good choice.

In case you forgot, throttle(func, delay) returns a throttled function, which invokes func at a max frequency no matter how throttled one is called.

Here is an example.

Before throttling we have following series of calls.

─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
After throttling at wait time of 3 dashes, it becomes like this.

─ A ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ E ─ ─ ─ G 
A is triggered right way because not in waiting time. B is swallowed because B, C are in the cooling time from A, and C is called after B.

Could you implement your own version of basic throttle()?

notes

Please follow above spec, the behavior is not exactly the same as lodash.throttle().

Since window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced with other implementation when judging your code. They still have the same interfaces, and internally keep track of the timing for testing purpose.

Some code like below is used to test your implementation. */


// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  let timeId = null;
  let latestArgs = null;
  return function (...args) {
    if(timeId) {
      latestArgs = args;
    } else {
      timeId = setTimeout(() => {
        if(latestArgs) {
          func.apply(this, latestArgs);
          timeId = null;
        }
      }, wait);
      func.apply(this, args);
    }
  }
}

