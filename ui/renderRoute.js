// ============================================
// ROUTE RENDERER - DARK THEME VERSION
// ============================================

function renderRoute(route) {
  const result = document.getElementById("result");
  
  if (!route || route.length === 0) {
    result.innerHTML = `
      <div class="empty-state">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <h3>No Route Found</h3>
        <p>We couldn't find a route between these stations. Please try different stations.</p>
      </div>
    `;
    return;
  }

  result.innerHTML = "";
  
  // Create route timeline container
  const timeline = document.createElement('div');
  timeline.className = 'route-timeline';
  
  let currentLine = null;

  route.forEach((step, i) => {
    const { station, line } = step;
    const lineData = metroData[line];

    // DETECT LINE CHANGE (Interchange)
   if (line !== currentLine) {
  if (currentLine !== null) {
        // Add interchange card
      const interchangeCard = document.createElement('div');
    interchangeCard.className = 'interchange-card';
        interchangeCard.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="17 1 21 5 17 9"></polyline>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <polyline points="7 23 3 19 7 15"></polyline>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <div>
            <b>${lineData.name}</b><br>
            <small>Platform ${lineData.platform || 'TBD'}</small>
          </div>
        `;
        timeline.appendChild(interchangeCard);
      }
      currentLine = line;
    }

    // STATION ROW
    const isFirst = i === 0;
    const isLast = i === route.length - 1;
    
    const stationRow = document.createElement('div');
    stationRow.className = `station-row ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''}`;
    stationRow.style.color = lineData?.color || '#ccc';
    
    stationRow.innerHTML = `
      <span class="dot" style="background:${lineData?.color || '#ccc'}"></span>
      <span class="station-name">
        ${station}
        ${isFirst ? '<span class="badge">START</span>' : ''}
        ${isLast ? '<span class="badge">END</span>' : ''}
      </span>
    `;
    
    timeline.appendChild(stationRow);
  });

  result.appendChild(timeline);

  // Add journey summary using helper functions
  const stats = getJourneyStats(route);

  const summaryCard = document.createElement('div');
  summaryCard.className = 'journey-summary';
  summaryCard.innerHTML = `
    <div class="summary-item">
      <strong>${stats.totalStations}</strong>
      <span>Stations</span>
    </div>
    <div class="summary-item">
      <strong>${stats.interchanges}</strong>
      <span>Interchange${stats.interchanges !== 1 ? 's' : ''}</span>
    </div>
    <div class="summary-item">
      <strong>${stats.estimatedTime}</strong>
      <span>Minutes</span>
    </div>
    <div class="summary-item">
      <strong>₹${stats.fare}</strong>
      <span>Fare</span>
    </div>
    <div class="summary-item">
      <strong>${formatDistance(stats.distance)}</strong>
      <span>Distance</span>
    </div>
  `;
  
  result.appendChild(summaryCard);

  // Scroll result into view smoothly
  setTimeout(() => {
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}