// To convert other data types to strings, you can use either String() or toString().
let result;

result = String(324);
console.log(result);

result = String(2+4);
console.log(result);

result = String(null);
console.log(result);

result = String(NaN);
console.log(result);

result = String(undefined);
console.log(result);

result = String(true);
console.log(result);

//using toString()

result = (324).toString();//Note: String() takes null and undefined and converts them to string.
// However, toString() gives error when null are passed.
console.log(result);

result = true.toString();
console.log(result);


