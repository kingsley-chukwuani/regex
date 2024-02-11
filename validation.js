// Regular expression patterns
const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
const mastercardPattern = /^5[1-5][0-9]{14}$/;
const vervePattern = /^((506(0|1))|(507(8|9))|(6500))[0-9]{12}$/;

// Function to validate credit card number
function validateCreditCardNumber(cardNumber) {
  if (visaPattern.test(cardNumber)) {
    return "Visa card number is valid";
  } else if (mastercardPattern.test(cardNumber)) {
    return "Mastercard number is valid";
  } else if (vervePattern.test(cardNumber)) {
    return "Verve card number is valid";
  } else {
    return "Invalid credit card number";
  }
}

// Test the function
console.log(validateCreditCardNumber('4111111111111111')); 
console.log(validateCreditCardNumber('5500000000000004')); 
console.log(validateCreditCardNumber('5078600000000000')); 
console.log(validateCreditCardNumber('1234567890123456')); 