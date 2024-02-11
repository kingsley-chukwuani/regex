**OVERVIEW**

This javascript program provides a function, `validateCreditCardNumber`, to validate credit card numbers for Visa, Mastercard, and Verve card types. It utilizes regular expressions to match the patterns of  each card type and returns whether the provided card number is valid or not


**FUNCTION DESCRIPTION**

`validateCreditCardNumber`: This function takes a credit card number as input and returns a string indicating whether the card number is valid for Visa, Mastercard, Verve or if it's invalid.


**REGULAR EXPRESSION PATTERNS DESCRIPTION**

 VISA PATTERN: `/^4[0-9]{12}(?:[0-9]{3})?$/`.
 
- This pattern matches Visa card numbers.
- It starts with a '4' followed by 12 digits, optionally followed by 3 more digits.
- Example: `4111111111111111`.







 MASTERCARD PATTERN: `/^5[1-5][0-9]{14}$/`.
 
- This pattern matches Mastercard card nmbers.
- It starts with a '5' followed by a digit between 1 and 5, followed by 14 digits.
- Example: `550000000000004`.



VERVE PATTERN: `/^((506(0|1))|(507(8|9))|(6500))[0-9]{12}$/`.

- This pattern matches Verve card numbers.
- It starts with either '5060', '5061', '5078', '5079', or '6500', followed by 12 digits.
- Example: `5078600000000000`.










