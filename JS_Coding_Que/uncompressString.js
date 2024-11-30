/* 

173. uncompress string
JavaScript
string
algorithm
TikTok
met this in an interview?
 24
Add to my list
Share

medium  1544 accepted / 6703 tried

ads via Carbon
Design and Development tips in your inbox. Every weekday.
ads via Carbon
Given a compressed string, return its original form.

For example.

uncompress('3(ab)') // 'ababab'
uncompress('3(ab2(c))') // 'abccabccabcc'
a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.

*/


/**
 * @param {string} str
 * @returns {string}
 */
function uncompress(str) {
    str = `(${str})`;
    const numStack = [];
    const strStack = [];
    let result = '';
    let isPreviousNum = false;
    let totalNum = '';
    Array.from(str).forEach(char => {
        if(isPreviousNum && !isNumber(char)) {
            isPreviousNum = false;
            numStack.push(Number(totalNum))
            totalNum = '';
        }
        if(isNumber(char)) {
            isPreviousNum = true;
            totalNum += char;
        } else if(char != ')') {
            strStack.push(char);
        } else {
            let subString = unCompressSubString(strStack);
            let mulipliedString = getMultipliedString(subString, numStack.pop() ?? 1);
            strStack.push(mulipliedString);
        }
    })
    result = strStack.pop();
    return result;
  }

function isNumber(char) {
    return /^[0-9]$/.test(char);
}

function unCompressSubString(strStack) {
    let subString = '';
    let char = strStack.pop();
    while(char != '(') {
        subString = char + subString;
        char = strStack.pop();
    }
    return subString;
}

function getMultipliedString(str, num) {
    let result = '';
    Array.from({length: num}, () => { result += str });
    return result;
}

  
  
  