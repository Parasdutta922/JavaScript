/*
The destructuring syntax makes it easier to assign values to a new variable.
*/ 

const person = {
    name : 'sara',
    age  : 25,
    gender:'female'
}

//this is the usual way to accessing object properties
/*let name  = person.name;
let age = person.age;
let gender = person.gender;

console.log(name);
console.log(age);
console.log(gender);*/

//now using destructure syntax
let {name, age, gender} = person;// in here we are assinging person object to the variables name, age, gender keep in mind that the variable name and the properties name from the object should be same otherwise it will give an error
console.log(name, age, gender);