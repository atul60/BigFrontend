class NodeStore {
    constructor() {
     this.store = {};
    }

    /**
    * @param {Node} node
    * @param {any} value
    */
   set(node, value) {
    node._symbolKey_ = Symbol();
    this.store[node._symbolKey_] = value;
   }

   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
    return this.store[node._symbolKey_];
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
    return !!this.store[node._symbolKey_];
   }
 }