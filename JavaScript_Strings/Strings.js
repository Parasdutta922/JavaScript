/*JavaScript string is a primitive data type that is used to work with texts.
 >In JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.
   1. Single quotes: 'hello'
   2. Double quotes: "hello"
   3. Backticks: `hello`*/

   
//strings example
const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;
console.log(name);
console.log(name1);
console.log(result);

//--------------------------------------------------------------------------------------------------------------------

//Accessing Strings
//String index starts with 0
//1 method
const a = 'HELLO';
console.log(a[3]);

//2 method
console.log(a.charAt(4));

//--------------------------------------------------------------------------------------------------------------------

//JavaScript Strings are Immutable,
// Meaning Strings cannot be modified for example characters of a string cannot be changed.

let b = 'hello';
b[0] = 'H';
console.log(b);//Output: hello

//However you can assign variable name to a new string.
b = 'Hello'
console.log(b);//Output: Hello

//--------------------------------------------------------------------------------------------------------------------

//JavaScript Case-Sensitive, Meaning in JavaScript the lowercase and uppercase letters are treated as different values.
const c = 'a';
const d = 'A';
console.log(a === b);//Output: False

//--------------------------------------------------------------------------------------------------------------------

//JavaScript Multiline Strings
//To use a multiline string, you can either use the '+' operator or the '\' operator.

//using '+' operator 
const message1 = 'This is a log message'+//1. line
'that spans across multiple lines'+//2. line
'in the code';//3. line
console.log(message1);

//using '\' operator
const message2 = 'This is a long message\
that spans across multiple lines\
in the code.'
console.log(message2);

//--------------------------------------------------------------------------------------------------------------------

// JavaScript String Length
//To find the length of a string, you can use built-in lengthproperty.
const e = 'hello';
console.log(a.length);

//--------------------------------------------------------------------------------------------------------------------

//JavaScript String Objects
//We can also create Strings using the new Keyword.
const f = 'hello';
const g = new String('hello');

console.log(typeof f);
console.log(typeof g);

//Note : It is recommended to avoid using string objects. Using string objects slows down the program.