/*To convert other data types to a Boolean, you can use Boolean().
In JavaScript, undefined, null, 0, NaN, '' converts to false.*/

let result;

result = Boolean('');
console.log(result);

result = Boolean(0);
console.log(result);

result = Boolean(undefined);
console.log(result);

result = Boolean(null);
console.log(result);

result = Boolean(NaN);
console.log(result);

//All other values give true

result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true
