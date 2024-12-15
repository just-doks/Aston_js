function compare(n1, n2) {
    let queue = Array([n1,n2]);
    while (queue.length) {
        const [node1, node2] = queue.shift();
        if (node1.value !== node2.value)
            return false;

        if (node1.left && node2.left) {
            queue.push([node1.left, node2.left]);
        } else
        if (node1.left !== node2.left)
            return false;

        if (node1.right && node2.right) {
            queue.push([node1.right, node2.right]);
        } else 
        if (node1.right !== node2.right)
            return false;
    }
    return true;
}

module.exports = compare;