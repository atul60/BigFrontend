/* 
Say you have multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.

Versions after first bad version are supposed to be all bad versions.

notes

Inputs are all non-negative integers
if none found, return -1
*/




// This is a JavaScript coding problem from BFE.dev 

/**
 * @typedef {(version: number) => boolean} IsBad
 */

/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    for(let i=0; i<=version; i++) {
      if(isBad(i)) return i;
    }
    return -1;
    // write your code to return the first bad version
    // if none found, return -1
  }
}