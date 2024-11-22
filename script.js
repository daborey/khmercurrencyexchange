const apiURL = 'https://data.mef.gov.kh/api/v1/realtime-api/exchange-rate?currency_id=';

document.addEventListener('DOMContentLoaded', () => {
  const bankSelect = document.getElementById('select-bank');
  const fromCurrencySelect = document.getElementById('from-currency');
  const toCurrencySelect = document.getElementById('to-currency');
  const amountInput = document.getElementById('amount');
  const convertButton = document.getElementById('convert-button');
  const rateDisplay = document.getElementById('rate');
  const amountResultDisplay = document.getElementById('amount-result');

  let currentRate = null;

  // Fetch exchange rate when dropdowns are changed
  async function fetchExchangeRate() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (fromCurrency === toCurrency) {
      currentRate = 1;
      rateDisplay.textContent = "1 (Same Currency)";
      return;
    }

    try {
      const response = await fetch(`${apiURL}${fromCurrency}`);
      const data = await response.json();

      if (data && data.data) {
        const bidRate = data.data.data.bid;
        const askRate = data.data.data.ask;

        // Display the correct rate based on bank (use ask rate for simplicity)
        currentRate = askRate;
        rateDisplay.textContent = `${bidRate} - ${askRate}`;
      } else {
        throw new Error('No rate data available');
      }
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      rateDisplay.textContent = 'Error fetching rate';
      currentRate = null;
    }
  }

  // Convert currency
  function convertCurrency() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || !currentRate) {
      amountResultDisplay.textContent = '--';
      alert('Please enter a valid amount and ensure rates are loaded.');
      return;
    }

    const convertedAmount = (amount * currentRate).toFixed(2);
    amountResultDisplay.textContent = `${convertedAmount} ${toCurrencySelect.value}`;
  }

  // Event listeners
  fromCur
