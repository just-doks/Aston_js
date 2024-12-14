class Node {
    constructor(value, left = undefined, right = undefined) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    valueOf() {
        return Symbol(this);
    }
    toString() {
        return "[object Node]";
    }
}

class Queue {
    #data;
    constructor() {
        this.#data = [];
    }
    enqueue(element) {
        this.#data.push(element);
    }
    dequeue() {
        return this.#data.shift();
    }
    isEmpty() {
        return this.#data.length ? false : true;
    }
}

function BFS(initNode) {
    let visited = new Map();
    let q = new Queue();
    q.enqueue(initNode);
    while (!q.isEmpty()) {
        
        const node = q.dequeue();

        console.log(node.value);

        visited.set(Symbol(node), true);
        if (node.left && !visited.get(Symbol(node.left))) {
            q.enqueue(node.left);
            visited[Symbol(node.left)] = true;
        }
        if (node.right && !visited.get(Symbol(node.right))) {
            q.enqueue(node.right);
            visited[Symbol(node.right)] = true;
        }
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


BFS(node1)

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

function compare(n1, n2) {
    let visited = new Map();
    let q = new Queue();
    q.enqueue([n1,n2]);
    while (!q.isEmpty()) {
        const [node1, node2] = q.dequeue();
        if (!(node1 instanceof Node) || !(node2 instanceof Node))
            return false;
        if (node1.value !== node2.value)
            return false;

        visited.set(Symbol(node1), true);
        if (node1.left && node2.left && !visited.get(Symbol(node1.left))) {
            q.enqueue([node1.left, node2.left]);
            visited.set(Symbol(node1.left), true);
        } else
        if (node1.left !== node2.left)
            return false;

        if (node1.right && node2.right && !visited.get(Symbol(node1.right))) {
            q.enqueue([node1.right, node2.right]);
            visited.set(Symbol(node1.right), true);
        } else 
        if (node1.right !== node2.right)
            return false;
    }
    return true;
}

const nodeA = node1;
const nodeB = deepCopy(nodeA);
console.log(compare(nodeA, nodeB));
nodeA.left.right = undefined;
nodeB.left.right = undefined;
console.log(compare(nodeA, nodeB));
nodeB.right.right.value = 99;
console.log(compare(nodeA, nodeB));