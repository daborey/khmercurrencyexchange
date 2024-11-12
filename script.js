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

// Update currency data function
function updateCurrencyData(event) {
  event.preventDefault();

  const wingBuy = parseFloat(document.getElementById('wingBuyUpdate').value);
  const wingSell = parseFloat(document.getElementById('wingSellUpdate').value);
  const abaBuy = parseFloat(document.getElementById('abaBuyUpdate').value);
  const abaSell = parseFloat(document.getElementById('abaSellUpdate').value);

  if (!isNaN(wingBuy)) document.getElementById('wingBuy').textContent = wingBuy.toFixed(2);
  if (!isNaN(wingSell)) document.getElementById('wingSell').textContent = wingSell.toFixed(2);
  if (!isNaN(abaBuy)) document.getElementById('abaBuy').textContent = abaBuy.toFixed(2);
  if (!isNaN(abaSell)) document.getElementById('abaSell').textContent = abaSell.toFixed(2);

  // Clear the input fields after updating
  document.getElementById('wingBuyUpdate').value = '';
  document.getElementById('wingSellUpdate').value = '';
  document.getElementById('abaBuyUpdate').value = '';
  document.getElementById('abaSellUpdate').value = '';
}
