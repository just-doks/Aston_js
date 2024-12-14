function compare(n1, n2) {
    let visited = new Map();
    let queue = Array([n1,n2]);
    while (queue.length) {
        const [node1, node2] = queue.shift();
        // if (!(node1 instanceof Node) || !(node2 instanceof Node))
        //     return false;
        if (node1.value !== node2.value)
            return false;

        visited.set(Symbol(node1), true);
        if (node1.left && node2.left && !visited.get(Symbol(node1.left))) {
            queue.push([node1.left, node2.left]);
            visited.set(Symbol(node1.left), true);
        } else
        if (node1.left !== node2.left)
            return false;

        if (node1.right && node2.right && !visited.get(Symbol(node1.right))) {
            queue.push([node1.right, node2.right]);
            visited.set(Symbol(node1.right), true);
        } else 
        if (node1.right !== node2.right)
            return false;
    }
    return true;
}

module.exports = compare;