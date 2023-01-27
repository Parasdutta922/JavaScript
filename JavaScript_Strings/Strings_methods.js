// JavaScript String Methods

//1. concatenating two strings meaning joining strings together 
let text1 = 'hello';
let text2 = 'world';
console.log(text1.concat(' ',text2));

//2. converting the text to uppercase
console.log(text1.toUpperCase());

//3. removing whitespace(space) from string
let text3 = '  mrcase'
console.log(text3.trim()); 

//4. converting the string to an array
console.log(text1.split());

/*5. slicing the string slice() extracts a section of a string and returns it as a new string,
without modifying the original string*/
console.log(text1.slice(1,3))//Output: el 
//=> because the split method slices the string from specified starting point(index) till the specified ending point(index) substracts it by -1 