const apiURL = 'https://data.mef.gov.kh/api/v1/realtime-api/exchange-rate?currency_id=';

document.addEventListener('DOMContentLoaded', function() {
  const convertFromSelect = document.getElementById('convert-from');
  const convertToSelect = document.getElementById('convert-to');
  const convertAmountInput = document.getElementById('convert-amount');
  const convertedAmount = document.getElementById('converted-amount');

  // Update exchange rates and currencies
  function updateRates() {
    const currency = convertFromSelect.value;
    
    fetchExchangeRate('acleda', currency);
    fetchExchangeRate('aba', currency);
    fetchExchangeRate('wing', currency);
  }

  // Fetch exchange rate for a selected bank and currency pair
  function fetchExchangeRate(bank, currency) {
    fetch(`${apiURL}${currency}`)
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          const bidRate = data.data.data.bid;
          const askRate = data.data.data.ask;

          // Update the rates in the table for buy/sell (bid/ask)
          document.getElementById(`${bank}-buy`).textContent = bidRate;
          document.getElementById(`${bank}-sell`).textContent = askRate;
        } else {
          document.getElementById(`${bank}-buy`).textContent = 'No data';
          document.getElementById(`${bank}-sell`).textContent = 'No data';
        }
      })
      .catch(err => {
        console.error('Error fetching exchange rate:', err);
        document.getElementById(`${bank}-buy`).textContent = 'Error';
        document.getElementById(`${bank}-sell`).textContent = 'Error';
      });
  }

  // Update rates when the currency selection changes
  convertFromSelect.addEventListener('change', updateRates);
  convertToSelect.addEventListener('change', updateRates);

  // Currency conversion logic
  convertAmountInput.addEventListener('input', function() {
    const amount = parseFloat(convertAmountInput.value);
    const fromCurrency = convertFromSelect.value;
    const toCurrency = convertToSelect.value;

    if (!amount) {
      convertedAmount.textContent = '';
      return;
    }

    fetch(`${apiURL}${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          const askRate = data.data.data.ask;  // Using the ask rate for conversion
          const convertedAmountValue = (amount * askRate).toFixed(2);
          convertedAmount.textContent = `Converted amount: ${convertedAmountValue} ${toCurrency}`;
        }
      })
      .catch(err => {
        console.error('Error during conversion:', err);
      });
  });

  // Initialize the exchange rates on page load
  updateRates();
});
