function numRegions(graph) {
    const visited = {};
    let result = 0;

    const graphTraversal= node => {
        if(visited[node]) return;
        visited[node] = true;

        graph[node].forEach( neigbor => {
            graphTraversal(neigbor);
        })
    }

    Object.keys(graph).forEach(key => {
        if(visited[key]) return;
        graphTraversal(key);
        result += 1;
    })

    return result;
}

module.exports = {
    numRegions
};