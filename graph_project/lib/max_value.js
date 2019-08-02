function maxValue(node, visited = new Set()) {
  if (!node) return null;

  if (visited[node.val]) return node.val;

  visited[node.val] = true;

  const result = [node.val];
  node.neighbors.forEach(neighbor => {
    result.push(maxValue(neighbor, visited));
  })

  return Math.max(...result);
}

module.exports = {
  maxValue
};
