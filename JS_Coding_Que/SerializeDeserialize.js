// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {

  function inorderTraversal(node) {
    if(!node) return 'null';
    return `${node.value} ${inorderTraversal(node.left)} ${inorderTraversal(node.right)}`
  }

  return inorderTraversal(root);
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  const nodeArr = str.split(' ');
  if(nodeArr.length === 1) return null;

  const nodeIndex = -1;

  function inOrderTree() {
    nodeIndex++;
    let item = nodeArr[nodeIndex];
    if(item == 'null') return null;
    const node = new Node(item, null, null);
    node.left = inOrderTree(node);
    node.right = inOrderTree(node);
    return node;
  }

  return inOrderTree();

}

  