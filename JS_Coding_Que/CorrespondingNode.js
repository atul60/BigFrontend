/* Given two same DOM tree A, B, and an Element a in A, find the corresponding Element b in B.

By corresponding, we mean a and b have the same relative position to their DOM tree root.

follow up

This could be a problem on general Tree structure with only children.

Could you solve it recursively and iteratively?

Could you solve this problem with special DOM api for better performance?

What are the time cost for each solution */


/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} target
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  // if only one child
  if(rootA == target) return rootB

  const AChildNodes = rootA.childNodes;
  const BChildNodes = rootB.childNodes;

  let result;
  for(let i=0; i<AChildNodes.length; i++) {
    if(AChildNodes[i] == target) {
        result = BChildNodes[i];
        break;
    }
    result = findCorrespondingNode(AChildNodes[i], BChildNodes[i], target);
    if(result) return result;
  }

  return result;

}