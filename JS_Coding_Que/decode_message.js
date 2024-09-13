/* 
Your are given a 2-D array of characters. There is a hidden message in it.

I B C A L K A
D R F C A E A
G H O E L A D 
The way to collect the message is as follows

start at top left
move diagonally down right
when cannot move any more, try to switch to diagonally up right
when cannot move any more, try switch to diagonally down right, repeat 3
stop when cannot neither move down right or up right. the character on the path is the message
for the input above, IROCLED should be returned.

notes

if no characters could be collected, return empty string

Source for this  

*/



// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
    const horizontalLen = Array.isArray(message[0]) ? message[0].length : 0;
    const verticalLen = message.length;
  
    let str = "";
  
    let i = -1, j = -1;
    let isMoveReversed = false;
    while(j < horizontalLen-1) {
      let newStr;
      [newStr, i, j] = isMoveReversed ? moveDownRight(message, i-1, j+1, horizontalLen, verticalLen) : moveDownRight(message, i+1, j+1, horizontalLen, verticalLen);
      str += newStr;
      isMoveReversed = !isMoveReversed;
    }
  
    return str;
  
  }
  
  const moveDownRight = (message, i, j, horizontalLen, verticalLen) => {
    let travelledStr = "";
    while(i < verticalLen && j < horizontalLen) {
      travelledStr += message[i][j];
      i++, j++;
    }
    return [travelledStr, --i, --j];
  }
  
  const moveUpRight = (message, i, j, horizontalLen, verticalLen) => {
    let travelledStr = "";
    while(i > -1 && j < horizontalLen) {
      travelledStr += message[i][j];
      i--, j++;
    }
    return [travelledStr, ++i, --j];
  }  