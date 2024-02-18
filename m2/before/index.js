import { calculateTax } from './calculateTax.js';
import { roundMoney } from './roundMoney.js';

// Tax Rates
export const lowRate = 0.05;
export const highRate = 0.095;

// Create ten examples and use the
// calc function
for (let x = 0; x < 10; ++x) {
  const invoiceTotal = Math.random() * 1000;
  const { postTax, taxRate } = calculateTax(invoiceTotal);
  console.log(
    `Total: $${roundMoney(invoiceTotal)} X ${taxRate} =  $${postTax}`
  );
}
