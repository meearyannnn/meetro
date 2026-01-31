// ============================================
// GRAPH BUILDER - (Station + Line) as Nodes
// ============================================


const graph = {};
const stationLines = {}; // Track which lines serve each station

// Build the graph with (station|line) as node IDs
function buildGraph(metroData) {
  const newGraph = {};

  // Step 1: Create nodes and edges along each line
  for (const lineKey in metroData) {
    const line = metroData[lineKey];
    const stations = line.stations;

    for (let i = 0; i < stations.length; i++) {
      const current = stations[i];
      const nodeId = `${current.name}|${lineKey}`;

      // Initialize node in graph
      if (!newGraph[nodeId]) newGraph[nodeId] = [];

      // Track station-to-lines mapping
      if (!stationLines[current.name]) stationLines[current.name] = new Set();
      stationLines[current.name].add(lineKey);

      // Forward edge (to next station on same line)
      if (i < stations.length - 1) {
        const next = stations[i + 1];
        newGraph[nodeId].push({
          to: `${next.name}|${lineKey}`,
          weight: 2, // Average minutes between stations
          line: lineKey
        });
      }

      // Backward edge (to previous station on same line)
      if (i > 0) {
        const prev = stations[i - 1];
        newGraph[nodeId].push({
          to: `${prev.name}|${lineKey}`,
          weight: 2, // Average minutes between stations
          line: lineKey
        });
      }
    }
  }

  return newGraph;
}

// Step 2: Add interchange edges between different lines at same station
function addInterchanges(graph, metroData) {
  const stationMap = {};

  // Collect all stations and their lines
  for (const lineKey in metroData) {
    metroData[lineKey].stations.forEach(st => {
      if (!stationMap[st.name]) stationMap[st.name] = [];
      stationMap[st.name].push(lineKey);
    });
  }

  // Connect all line combinations at each station
  for (const station in stationMap) {
    const lines = stationMap[station];

    // Only add interchange edges if station is on multiple lines
    if (lines.length > 1) {
      for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
          const nodeA = `${station}|${lines[i]}`;
          const nodeB = `${station}|${lines[j]}`;

          // Add bidirectional interchange edges with penalty
          if (graph[nodeA] && graph[nodeB]) {
            graph[nodeA].push({
              to: nodeB,
              weight: 5, // Interchange penalty (5 minutes)
              line: lines[j],
              isInterchange: true
            });

            graph[nodeB].push({
              to: nodeA,
              weight: 5, // Interchange penalty (5 minutes)
              line: lines[i],
              isInterchange: true
            });
          }
        }
      }
    }
  }
}

// Initialize the graph
Object.assign(graph, buildGraph(metroData));
addInterchanges(graph, metroData);

// Log interchange stations for debugging
console.log("Interchange stations:", 
  Object.entries(stationLines)
    .filter(([_, lines]) => lines.size > 1)
    .map(([station, lines]) => `${station} (${[...lines].join(', ')})`)
);

console.log(`Graph built: ${Object.keys(graph).length} nodes`);