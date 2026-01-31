// ============================================
// HELPER FUNCTIONS (Updated for new graph)
// ============================================

/**
 * Check if a station is an interchange station
 * (exists on multiple lines)
 */
function isInterchangeStation(stationName) {
  // First check if station exists on multiple lines
  if (!stationLines[stationName] || stationLines[stationName].size <= 1) {
    return false;
  }
  // Then check if ANY of the lines serving this station have interchange: true
  for (const lineKey of stationLines[stationName]) {
    const line = metroData[lineKey];
    const station = line.stations.find(s => s.name === stationName);
    
    if (station && station.interchange === true) {
      return true;
    }
  }
  
  return false;
}

/**
 * Get all lines that serve a station
 * Returns array of line objects with metadata
 */
function getLinesForStation(stationName) {
  const lines = [];
  
  if (!stationLines[stationName]) return lines;
  
  for (const lineKey of stationLines[stationName]) {
    lines.push({
      key: lineKey,
      name: metroData[lineKey].name,
      color: metroData[lineKey].color,
      platform: metroData[lineKey].platform
    });
  }
  
  return lines;
}

/**
 * Find a common line between two stations
 * Returns line object if found, null otherwise
 */
function getCommonLine(stationA, stationB) {
  const linesA = getLinesForStation(stationA);
  const linesB = getLinesForStation(stationB);
  
  const commonLine = linesA.find(lineA => 
    linesB.some(lineB => lineB.key === lineA.key)
  );
  
  return commonLine || null;
}

/**
 * Calculate estimated journey time from route
 * @param {Array} route - Array of {station, line, nodeId} objects
 * @returns {number} Time in minutes
 */
function calculateTime(route) {
  if (!route || route.length === 0) return 0;
  
  let time = 0;
  let interchangeCount = 0;
  
  // Calculate travel time between stations (2 minutes per station)
  time = (route.length - 1) * 2;
  
  // Add interchange penalties (5 minutes each)
  for (let i = 1; i < route.length; i++) {
    if (route[i].line !== route[i - 1].line) {
      interchangeCount++;
      time += 5; // Interchange penalty
    }
  }
  
  // Add boarding time (3 minutes at start)
  time += 3;
  
  return Math.round(time);
}

/**
 * Calculate fare based on number of stations
 * Based on Delhi Metro fare structure
 * @param {Array} route - Array of {station, line, nodeId} objects
 * @returns {number} Fare in rupees
 */
function calculateFare(route) {
  if (!route || route.length === 0) return 0;
  
  const stations = route.length;
  
  // Delhi Metro fare slabs
  if (stations <= 2) return 10;
  if (stations <= 5) return 20;
  if (stations <= 12) return 30;
  if (stations <= 21) return 40;
  if (stations <= 32) return 50;
  return 60;
}

/**
 * Get detailed journey statistics
 * @param {Array} route - Array of {station, line, nodeId} objects
 * @returns {Object} Journey statistics
 */
function getJourneyStats(route) {
  if (!route || route.length === 0) {
    return {
      totalStations: 0,
      interchanges: 0,
      estimatedTime: 0,
      fare: 0,
      distance: 0,
      lines: []
    };
  }
  
  // Count interchanges
  const interchanges = route.filter((step, i) => 
    i > 0 && step.line !== route[i - 1].line
  ).length;
  
  // Get unique lines used
  const uniqueLines = [...new Set(route.map(step => step.line))];
  const linesUsed = uniqueLines.map(lineKey => ({
    key: lineKey,
    name: metroData[lineKey]?.name || lineKey,
    color: metroData[lineKey]?.color || '#ccc'
  }));
  
  // Calculate approximate distance (2km between stations average)
  const distance = Math.round((route.length - 1) * 2 * 10) / 10; // in km
  
  return {
    totalStations: route.length,
    interchanges: interchanges,
    estimatedTime: calculateTime(route),
    fare: calculateFare(route),
    distance: distance,
    lines: linesUsed
  };
}

/**
 * Find all interchange points in a route
 * @param {Array} route - Array of {station, line, nodeId} objects
 * @returns {Array} Array of interchange objects
 */
function findInterchangePoints(route) {
  const interchanges = [];
  
  for (let i = 1; i < route.length; i++) {
    if (route[i].line !== route[i - 1].line) {
      interchanges.push({
        station: route[i].station,
        fromLine: {
          key: route[i - 1].line,
          name: metroData[route[i - 1].line]?.name || route[i - 1].line,
          color: metroData[route[i - 1].line]?.color || '#ccc'
        },
        toLine: {
          key: route[i].line,
          name: metroData[route[i].line]?.name || route[i].line,
          color: metroData[route[i].line]?.color || '#ccc',
          platform: metroData[route[i].line]?.platform
        },
        index: i
      });
    }
  }
  
  return interchanges;
}

/**
 * Get stations between two points on the same line
 * @param {string} lineKey - Line identifier (e.g., 'yellow')
 * @param {string} startStation - Starting station name
 * @param {string} endStation - Ending station name
 * @returns {Array} Array of station names in order
 */
function getStationsBetween(lineKey, startStation, endStation) {
  if (!metroData[lineKey]) return [];
  
  const stations = metroData[lineKey].stations.map(s => s.name);
  const startIdx = stations.indexOf(startStation);
  const endIdx = stations.indexOf(endStation);
  
  if (startIdx === -1 || endIdx === -1) return [];
  
  // Handle both directions
  if (startIdx < endIdx) {
    return stations.slice(startIdx, endIdx + 1);
  } else {
    return stations.slice(endIdx, startIdx + 1).reverse();
  }
}

/**
 * Format time in human-readable format
 * @param {number} minutes - Time in minutes
 * @returns {string} Formatted time string
 */
function formatTime(minutes) {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
}

/**
 * Format distance in human-readable format
 * @param {number} km - Distance in kilometers
 * @returns {string} Formatted distance string
 */
function formatDistance(km) {
  if (km < 1) {
    return `${Math.round(km * 1000)}m`;
  }
  return `${km.toFixed(1)}km`;
}

/**
 * Check if a direct route exists between two stations
 * (same line, no interchange needed)
 * @param {string} stationA - First station name
 * @param {string} stationB - Second station name
 * @returns {Object|null} Line info if direct route exists, null otherwise
 */
function hasDirectRoute(stationA, stationB) {
  return getCommonLine(stationA, stationB);
}

/**
 * Validate station name
 * @param {string} stationName - Station name to validate
 * @returns {boolean} True if station exists
 */
function isValidStation(stationName) {
  return stationLines[stationName] !== undefined;
}

/**
 * Get nearest stations to a given station
 * @param {string} stationName - Station name
 * @param {number} limit - Maximum number of stations to return
 * @returns {Array} Array of nearby station names
 */
function getNearbyStations(stationName, limit = 5) {
  const nearby = new Set();
  
  if (!isValidStation(stationName)) return [];
  
  // Get all lines serving this station
  const lines = getLinesForStation(stationName);
  
  // For each line, get adjacent stations
  lines.forEach(line => {
    const stations = metroData[line.key].stations;
    const idx = stations.findIndex(s => s.name === stationName);
    
    if (idx !== -1) {
      // Add previous station
      if (idx > 0) nearby.add(stations[idx - 1].name);
      // Add next station
      if (idx < stations.length - 1) nearby.add(stations[idx + 1].name);
    }
  });
  
  return Array.from(nearby).slice(0, limit);
}
// Add this at the end of your helpers.js file temporarily
console.log("Haiderpur Badli Mor interchange status:", isInterchangeStation("Haiderpur Badli Mor"));
console.log("Lines for Haiderpur Badli Mor:", getLinesForStation("Haiderpur Badli Mor"));