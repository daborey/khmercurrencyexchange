// Swap currency functionality
document.querySelector('.swap-button').addEventListener('click', () => {
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
  });
  
  // Conversion functionality
  document.querySelector('.convert-button').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const exchangeRate = parseFloat(document.getElementById('exchange-rate').value);
    let result = 0;
  
    // Check if amount and exchange rate are valid numbers
    if (isNaN(amount) || amount <= 0) {
      document.getElementById('result').textContent = "Please enter a valid amount.";
      return;
    }
    if (isNaN(exchangeRate) || exchangeRate <= 0) {
      document.getElementById('result').textContent = "Please enter a valid exchange rate.";
      return;
    }
  
    if (fromCurrency === "USD" && toCurrency === "KHR") {
      result = amount * exchangeRate;
      document.getElementById('result').textContent = `${amount} USD = ${result.toFixed(2)} KHR`;
    } else if (fromCurrency === "KHR" && toCurrency === "USD") {
      result = amount / exchangeRate;
      document.getElementById('result').textContent = `${amount} KHR = ${result.toFixed(2)} USD`;
    } else {
      document.getElementById('result').textContent = "No conversion needed.";
    }
  });
  