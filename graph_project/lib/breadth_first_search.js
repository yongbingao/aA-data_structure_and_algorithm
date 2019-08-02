function breadthFirstSearch(startingNode, targetVal) {
    if (!startingNode) return null;

    const visited = {};

    let queue = [startingNode];

    while (queue.length) {
        const current = queue.shift();

        if(visited[current.val]) continue;
        else visited[current.val] = true;
        if(current.val === targetVal) return current;
        queue = queue.concat(current.neighbors);
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};