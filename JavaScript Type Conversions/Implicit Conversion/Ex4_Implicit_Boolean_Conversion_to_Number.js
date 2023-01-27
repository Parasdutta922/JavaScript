// Implicit(automatic) Boolean Conversion to Number, 
//Means boolean value gets converted to number because true is digit 1 and false is digit 0
// if boolean is used, true is 1, false is 0

let result;

result = '4' - true;// In here the string is getting subtracted with an boolean value true which is equal to digit 1
//and as we know string digit getting subtracted with any other digit also results in implicit number conversion.
console.log(result);

result = 4 + true;
console.log(result);

result = 4 + false;
console.log(result);

//Note: JavaScript considers 0 as false and all non-zero number as true. And,
// if true  is converted to a number, the result is always 1.