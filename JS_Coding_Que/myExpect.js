
/* 
161. toBe() or not.toBe()
JavaScript
Meta

ads via Carbon
Design and Development tips in your inbox. Every weekday.
ads via Carbon
Here are some simple Jest test code.

expect(3).toBe(3) // ✅
expect(4).toBe(3) // ❌
We can reverse it with not.

expect(3).not.toBe(3) // ❌
expect(4).not.toBe(3) // ✅
Please implement myExpect() to support toBe() and also not.
*/



/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
    return {
        not: {
                toBe: (compareValue) => {
                    return input !== compareValue;
            }
        },
        toBe: (compareValue) => {
            return input === compareValue;
        }
    }
  }


  const rectangle = {
    width: 5,
    height: 10,
    
    // Getter to calculate area
    area: this.width * this.height
  };
  
 console.log(rectangle.area)
  
  
  
  