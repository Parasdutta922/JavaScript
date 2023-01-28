/*1. A function is a reusable set of statements to perform a task or calculate a value.
2. Functions can be passed one or more values and can return a value at the end of their execution.
3. In order to use a function, you must define it somewhere in the scope where you wish to call it.*/

/*1.-------------------------------------------------------------------------------------------------------------------*/
//A function is a block of code that performs a specific task.

//Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

//Function declaration 
function hello(){
    console.log('hello');
}
// calling the functino
hello();

/*2.-------------------------------------------------------------------------------------------------------------------*/

//Parameters and arguments

//1. Parameters allow functions to accept input(s) and perform a task using the input(s).
function greet(name){//Inside the parentheses parameter is specified
    console.log(name);
}

greet('john');//when passing value(input) it's called argument

//Default parameter
//Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.
function defualt(name = 'prop'){
    console.log(name);
}

defualt();// in here we did not specify the value so the output is prop.
defualt('Goner');

/*3.-------------------------------------------------------------------------------------------------------------------*/
//Function return meaning function returns some value after performing given task 
function returning(name){
    return `hello mr ${name}`;//code execution stops after return.
}

let reference = returning('jd');// initializing the value returned by function returning() into variable reference.
console.log(reference);

/*4.-------------------------------------------------------------------------------------------------------------------*/
//helper function
//We can also use the return value of a function inside another function.
// These functions being called within another function are often referred to as helper functions. 


function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;//here the value returned by multiplyByNineFifths() is being added to 32 becuase it called function. 
  };
   
console.log(getFahrenheit(15)); // Returns 59

/*5.-------------------------------------------------------------------------------------------------------------------*/
//Function Expressions 
/*Another way to define a function is to use a function expression.
 To define a function inside an expression, we can use the function keyword.
 In a function expression, the function name is usually omitted.
 A function with no name is called an anonymous function.
 A function expression is often stored in a variable in order to refer to it.*/

 let create  = function(permitted){ //here we are assigning a anonymous function to a variable/identifier create.
    return `${permitted}`;
 }
 console.log(create); //this prints the stored function in the console
 console.log(create('natural'));// this prints the executed value of the function expression. create is a reference variable.

 /*6.-------------------------------------------------------------------------------------------------------------------*/

 //Arrow function 
 /*arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.
 
 Arrow functions remove the need to type out the keyword function every time you need to create a function.
 Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { }*/

 const adding = (a,b) => {
    return a+b;
 }

 console.log(adding(4,8));