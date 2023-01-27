//non-numeric string(words) used with - , / , * results to NaN
let result;

result = 'hello'-'world';
console.log(result);

result = '4'-'hello';//using with string number and string results in nan
console.log(result);