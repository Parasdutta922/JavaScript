/*Explicit Conversion means manually converting one data type to another.*/

//To convert numeric strings and boolean values to numbers, you can use Number().

let result;

//string to number
result = Number('324');//here the digits are in string data type
console.log(result);

//Boolean to number
result = Number(true);
console.log(result);

//In JavaScript, empty strings and null values return 0.
result = Number(null);
console.log(result);

result = Number('');//Empty String means no value just the quotation mark
console.log(result);

//If a string is an invalid number, the result will be NaN, Meaning no Numeric(digit,number) value.
result = Number('Hello');
console.log(result);

//It's the same with undefined and NaN value. 
result = Number(undefined);
console.log(result);

//--------------------------------------------------------------------------------------------------------------------

//Note: You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor().

result = parseInt('20.01'); //Returns integer value
console.log(result);

result = parseFloat('20.01'); // Returns float value
console.log(result);

result = +'20.01';// Returns the value as input.
console.log(result);

result = Math.floor('20.01');// Returns a round figure value.
console.log(result);