"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'fanny pack';
let shipping;
let taxPercent;
let taxTotal;
let total;
const shippingAddress = 'Wilhelmstraße 40, 69221 Dossenheim';
const product = products_1.default.find((product) => product.name === productName);
if (product) {
    console.log('Found product:', product);
}
else {
    console.log('Product not found');
}
if (product !== undefined && product.preOrder === true) {
    console.log('We will send you a message when the product is on the way!');
}
else {
    console.log('Product is not on pre-order.');
}
if (product !== undefined && product.price > 25) {
    shipping = 0;
    console.log('Free shipping for this product!');
}
else {
    shipping = 5;
    console.log('Standard shipping fee applied.');
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
//Alternative:
/* if (shippingAddress.toLowerCase().includes('New York')) {
    taxPercent = 0.1; // 10% tax for New York
  } else {
    taxPercent = 0.05; // 5% tax for other locations
  } */
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
