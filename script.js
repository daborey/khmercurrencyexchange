// Conversion rate: 1 USD = 4100 KHR
const exchangeRate = 4100;

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
  let result = 0;

  if (isNaN(amount) || amount <= 0) {
    document.getElementById('result').textContent = "Please enter a valid amount.";
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
