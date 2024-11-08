// Swap currency functionality
function swapCurrencies() {
  const fromCurrency = document.getElementById('fromCurrency');
  const toCurrency = document.getElementById('toCurrency');
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
}

// Conversion functionality
function convertCurrency(event) {
  event.preventDefault();
  
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
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
}
