//An array is an object that can store multiple values at once.
const words = ['hello','world','almabetter'];
console.log(typeof words);
console.log(words);

/*Creating a array.There are two ways
1. using array literal
2. using new keyword*/ 

//1. way
const array1 = ['eat','bite'];
console.log(array1);

//2.way
const array2 = new Array('help','me');
console.log(array2)

//In javaScript Arrays can hold Multile values of different data types at once.
const hold = [{'task':'break'},[1,2,3,4],function hello(){console.log('hello')}]//values inside the array hold => object, array of numbers, function hello()
console.log(hold);

//Accessing elements of an array it's the same as Accessing Strings.
hold[2]();

/*1.-------------------------------------------------------------------------------------------------------------------*/
//You can use the built-in method push() and unshift() to add elements to an array.
// Add an Element to an Array

let dailybasics = ['bread','milk','sleep'];
//push() method adds element at the end 
dailybasics.push('exercise');
console.log(dailybasics);

//unshift() method adds element at the beginning 
dailybasics.unshift('power');
console.log(dailybasics);

/*2.-------------------------------------------------------------------------------------------------------------------*/

//Change the element of an Array
//You can also add elements or change the elements by accessing the index value.

dailybasics[5]='xoxo';
console.log(dailybasics);

/*Suppose an array has two elements.
 If you try to add an element at index 3 (fourth element), the third element will be undefined.
 
 Basically, if you try to add elements to high indices, the indices in between will have an undefined value.*/

dailybasics[7] = 'proper';
console.log(dailybasics);

/*3.-------------------------------------------------------------------------------------------------------------------*/
//Remove an Element from an Array

//You can use the pop() method to remove the last element from an array.
// The pop() method also returns the returned value.
let removedelement = dailybasics.pop();
console.log(dailybasics);
console.log(removedelement);

/*If you need to remove the first element, you can use the shift() method.
 The shift() method removes the first element and also returns the removed element.*/
removedelement = dailybasics.shift();
console.log(dailybasics);
console.log(removedelement);

/*4.-------------------------------------------------------------------------------------------------------------------*/
//Array length 
//You can find the length of an element (the number of elements in an array) using the length property.

console.log(dailybasics.length);