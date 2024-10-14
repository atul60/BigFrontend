


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

  function binaryVersion(start, end) {
    return Math.ceil((start+end)/2);

  }

  let midVersion, bad, startBadVersion = -1;
  function firstBadVersion(start, end) {
    if(start > end) return startBadVersion;
    midVersion = binaryVersion(start, end);
    bad = isBad(midVersion);
    if(bad) {
      startBadVersion = midVersion;
      return firstBadVersion(start, midVersion-1);
    } else {
      return firstBadVersion(midVersion+1, end);
    }
  }

  return (version) => { 
    return firstBadVersion(0, version);
  }
}




