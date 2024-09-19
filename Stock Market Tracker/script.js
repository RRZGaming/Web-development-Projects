// Sample data for Nifty 50, Bank Nifty, Sensex, Nifty Midcap, HDFC Bank, and NIFTY IT
const nifty50Data = [17250, 17260, 17255, 17270, 17280, 17290, 17300];
const bankNiftyData = [37000, 37050, 37100, 37150, 37200, 37250, 37300];
const sensexData = [60000, 60100, 60150, 60200, 60250, 60300, 60350];
const niftyMidcapData = [8950, 8955, 8960, 8955, 8965, 8970, 8980];
const hdfcBankData = [1600, 1605, 1610, 1605, 1615, 1620, 1625];
const niftyITData = [31200, 31250, 31300, 31250, 31350, 31400, 31450];

// Generate charts using Chart.js
function generateChart(chartId, data, color) {
  const ctx = document.getElementById(chartId).getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [{
        label: 'Price Trend',
        data: data,
        borderColor: color,
        borderWidth: 2,
        fill: false,
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}

// Function to update stock info dynamically
function updateStockInfo(idPrefix, data) {
  const priceElement = document.getElementById(`${idPrefix}-price`);
  const changeElement = document.getElementById(`${idPrefix}-change`);
  
  const currentPrice = data[data.length - 1];
  const prevPrice = data[data.length - 2];
  
  priceElement.textContent = `$${currentPrice.toFixed(2)}`;
  
  const change = ((currentPrice - prevPrice) / prevPrice * 100).toFixed(2);
  const isPositive = change > 0;
  changeElement.textContent = `${isPositive ? '+' : ''}${change}%`;
  changeElement.className = isPositive ? 'positive' : 'negative';
}

// Initialize charts for each stock
window.onload = function() {
  generateChart('nifty50-chart', nifty50Data, '#ff6b6b');
  generateChart('banknifty-chart', bankNiftyData, '#00c6ff');
  generateChart('sensex-chart', sensexData, '#f39c12');
  generateChart('niftymidcap-chart', niftyMidcapData, '#9b59b6');
  generateChart('hdfcbank-chart', hdfcBankData, '#2ecc71');
  generateChart('niftyit-chart', niftyITData, '#e74c3c');

  // Update stock info with sample data
  updateStockInfo('nifty50', nifty50Data);
  updateStockInfo('banknifty', bankNiftyData);
  updateStockInfo('sensex', sensexData);
  updateStockInfo('niftymidcap', niftyMidcapData);
  updateStockInfo('hdfcbank', hdfcBankData);
  updateStockInfo('niftyit', niftyITData);
};
