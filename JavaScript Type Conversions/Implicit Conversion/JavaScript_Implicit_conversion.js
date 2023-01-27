/*? What is Implicit Conversion
In certain situations, JavaScript automatically converts one data type to another (to the right type).
This is known as implicit conversion.
*/
// numeric string used with + gives string type
let result;

result = '3' + 2;
console.log(result);

result = '3' + true ;
console.log(result);

result = '3' + undefined;
console.log(result);

result = '3' + null;
console.log(result);

/*Note: When a number is added to a string,
 JavaScript converts the number to a string before concatenation.*/