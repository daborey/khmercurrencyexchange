const API_URL = "https://daborey.github.io/khmercurrencyexchange/backend/data.json";

// Fetch exchange rates from the API
async function fetchRates() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Validate data structure
    if (!data.banks || !Array.isArray(data.banks)) {
      throw new Error("Invalid data structure: 'banks' is undefined or not an array");
    }

    displayRates(data.banks);
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    document.getElementById("debug").textContent = `Error fetching exchange rates: ${error.message}`;
  }
}

// Display the rates in the table
function displayRates(banks) {
  const tableBody = document.getElementById("rates-table-body");
  tableBody.innerHTML = ""; // Clear any existing rows

  banks.forEach((bank) => {
    const usdRate = bank.rates.find((rate) => rate.currency === "USD");
    const cnyRate = bank.rates.find((rate) => rate.currency === "CNY");
    const khrRate = bank.rates.find((rate) => rate.currency === "KHR");

    const bankRow = document.createElement("tr");
    bankRow.innerHTML = `
      <td><img src="${bank.logo}" alt="${bank.name}" width="24" height="24"> ${bank.name}</td>
      <td>Buy: ${usdRate?.bankBuy || "N/A"} | Sell: ${usdRate?.bankSell || "N/A"}</td>
      <td>Buy: ${cnyRate?.bankBuy || "N/A"} | Sell: ${cnyRate?.bankSell || "N/A"}</td>
      <td>Buy: ${khrRate?.bankBuy || "N/A"} | Sell: ${khrRate?.bankSell || "N/A"}</td>
    `;
    tableBody.appendChild(bankRow);
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  fetchRates();
});
