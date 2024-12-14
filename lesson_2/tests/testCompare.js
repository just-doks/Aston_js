const compare = require('../compare.js');

class Node {
    constructor(value, left = undefined, right = undefined) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const node9_4r = new Node(9)
const node8_4l = new Node(8)
const node7_3r = new Node(7)
const node6_3l = new Node(6)
const node5_2r = new Node(5)
const node4_2l = new Node(4, node8_4l, node9_4r)
const node3_1r = new Node(3, node6_3l, node7_3r)
const node2_1l = new Node(2, node4_2l, node5_2r)
const node1 = new Node(1, node2_1l, node3_1r)

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((el) => deepCopy(el));
    }
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => 
            ([key, deepCopy(value)])));
}

const nodeA = node1;
const nodeB = deepCopy(nodeA)
console.log(compare(nodeA, nodeB)); // true

nodeB.right.left.value = 99;
console.log(compare(nodeA, nodeB)); // false

nodeA.right.left = undefined;
nodeB.right.left = undefined;
console.log(compare(nodeA, nodeB)); // true