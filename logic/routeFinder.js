// ============================================
// DIJKSTRA ROUTE FINDER
// ============================================

function findBestRoute(startStation, endStation) {
  // Find all possible start and end nodes (station can be on multiple lines)
  const startNodes = [];
  const endNodes = [];

  for (const nodeId in graph) {
    const [station, line] = nodeId.split('|');
    if (station === startStation) startNodes.push(nodeId);
    if (station === endStation) endNodes.push(nodeId);
  }

  if (startNodes.length === 0 || endNodes.length === 0) {
    console.error('Station not found in graph');
    return null;
  }

  // Run Dijkstra from all start nodes, find best path to any end node
  let bestPath = null;
  let bestDistance = Infinity;

  startNodes.forEach(startNode => {
    endNodes.forEach(endNode => {
      const result = dijkstra(startNode, endNode);
      if (result.distance < bestDistance) {
        bestDistance = result.distance;
        bestPath = result.path;
      }
    });
  });

  return bestPath;
}

function dijkstra(start, end) {
  const dist = {};
  const prev = {};
  const visited = new Set();

  // Initialize distances
  Object.keys(graph).forEach(node => dist[node] = Infinity);
  dist[start] = 0;

  while (true) {
    // Find unvisited node with smallest distance
    let closest = null;
    let minDist = Infinity;

    for (const node in dist) {
      if (!visited.has(node) && dist[node] < minDist) {
        minDist = dist[node];
        closest = node;
      }
    }

    // No more reachable nodes or reached destination
    if (!closest || closest === end) break;
    
    visited.add(closest);

    // Update distances to neighbors
    for (const edge of graph[closest]) {
      const alt = dist[closest] + edge.weight;
      
      if (alt < dist[edge.to]) {
        dist[edge.to] = alt;
        prev[edge.to] = closest;
      }
    }
  }

  // Reconstruct path
  const path = [];
  let current = end;

  while (current) {
    const [station, line] = current.split('|');
    path.unshift({ 
      station, 
      line,
      nodeId: current
    });
    current = prev[current];
  }

  // If path only has end node, no route was found
  if (path.length === 1 && path[0].nodeId === end) {
    return { distance: Infinity, path: null };
  }

  return { 
    distance: dist[end], 
    path: path 
  };
}