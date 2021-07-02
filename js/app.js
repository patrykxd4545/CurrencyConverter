const from_currencyName = document.getElementById('from_currency');
const to_currencyName = document.getElementById('to_currency');
const from_ammountEl = document.getElementById('from_ammount');
const ammountCurrency = document.getElementById('to_ammount');
const elementRate = document.getElementById('rate');
const exchange = document.getElementById('exchange');
 
from_currencyName.addEventListener('change', currencyConvert);
from_ammountEl.addEventListener('input', currencyConvert);
to_currencyName.addEventListener('change', currencyConvert);
ammountCurrency.addEventListener('input', currencyConvert);
 
exchange.addEventListener('click', () => {
 const temp = from_currencyName.value;
 from_currencyName.value = to_currencyName.value;
 to_currencyName.value = temp;
 currencyConvert();
});
 
function currencyConvert() {
 const from_currency = from_currencyName.value;
 const to_currency = to_currencyName.value;
 
 fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
 .then(res => res.json())
 .then(res => {
 const rate = res.rates[to_currency];
 elementRate.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
 ammountCurrency.value = (from_ammountEl.value * rate).toFixed(2);
 })
}
 
currencyConvert();
