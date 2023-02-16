export function multiply(element, price) {
  clearElement(element);
  multiplicationTable(element, price);
}

function clearElement(element) {
  element.innerHTML = "";
}

function multiplicationTable(element, price) {
  let parsedPrice = Number.parseFloat(price).toFixed(2);
  for (let i = 0; i < 50; i++) {
    element.innerHTML += multiplicationRow(parsedPrice, i);
  }
}

function multiplicationRow(price, index) {
  let quantity = index + 1;  
  let total = (price * quantity).toFixed(2);
  return `<p>${quantity} - R$ ${price} = ${total}</p>`;
}
