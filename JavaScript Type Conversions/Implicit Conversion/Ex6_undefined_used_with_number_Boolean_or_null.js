// Arithmetic operation of undefined with number(value), boolean(value) or null gives NaN,
//Meaning using undefined(value) with number, boolean and null gives the output NaN

let result;

result = 4 + undefined;
console.log(result);

result = 4 - undefined;
console.log(result);

result = true + undefined;
console.log(result);

result = null + undefined;
console.log(result);

