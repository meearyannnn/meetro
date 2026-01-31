const sourceSelect = document.getElementById("source");
const destSelect = document.getElementById("destination");
const button = document.getElementById("findBtn");
const swapBtn = document.getElementById("swapBtn");
const resultDiv = document.getElementById("result");

const stations = Object.keys(graph).sort();

// Populate station dropdowns
stations.forEach(s => {
  sourceSelect.innerHTML += `<option value="${s}">${s}</option>`;
  destSelect.innerHTML += `<option value="${s}">${s}</option>`;
});

// Swap button functionality
if (swapBtn) {
  swapBtn.addEventListener("click", () => {
    const temp = sourceSelect.value;
    sourceSelect.value = destSelect.value;
    destSelect.value = temp;
  });
}

// Find route button
button.addEventListener("click", () => {
  const src = sourceSelect.value;
  const dst = destSelect.value;

  // Validation
  if (!src || !dst) {
    showError("Please select both source and destination stations");
    return;
  }

  if (src === dst) {
    showError("Source and destination cannot be the same");
    return;
  }

  // Show loading state
  showLoading();

  // Small delay for better UX (simulating calculation)
  setTimeout(() => {
    try {
      const route = findBestRoute(src, dst);
      if (route) {
        renderRoute(route);
      } else {
        showError("No route found between these stations");
      }
    } catch (error) {
      showError("Error finding route. Please try again.");
      console.error(error);
    }
  }, 300);
});

// Show loading state
function showLoading() {
  resultDiv.innerHTML = `
    <div class="loading">
      <span>Finding best route...</span>
    </div>
  `;
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Show error message
function showError(message) {
  resultDiv.innerHTML = `
    <div class="empty-state">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <h3>Oops!</h3>
      <p>${message}</p>
    </div>
  `;
}

// Enable Enter key to search
sourceSelect.addEventListener("keypress", (e) => {
  if (e.key === "Enter") button.click();
});

destSelect.addEventListener("keypress", (e) => {
  if (e.key === "Enter") button.click();
});