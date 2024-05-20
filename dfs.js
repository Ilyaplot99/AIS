function dfs(graph, startNode) {
    let visited = [];
    function dfsUtil(node) {
        visited.push(node);
        let neighbors = graph[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.includes(neighbors[i])) {
                dfsUtil(neighbors[i]);
            }
        }
    }
    
    dfsUtil(startNode, 0);
    return pathLength_;
    
    
    // Пример графа
    let graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    }; 
}
    dfs(graph, 'A', 'F');