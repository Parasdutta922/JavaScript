/*1.Section--------------------------------------------------------------------------------------------------------------------*/

/*The common object is usually called a blueprint, while the created objects are called instances.

An Object is a unique entity that contains property and methods.

1. Each instance has properties that are not shared with other instances.

2. Objects are everywhere in JavaScript almost every element is an Object whether it is a function, array, and string.

Note:  A Method in javascript is a property of an object whose value is a function.

3. The characteristics of an Object are called Property, in Object-Oriented Programming and the actions are called methods.

4. An Object is an instance of a class.*/

/*2.Section--------------------------------------------------------------------------------------------------------------------*/

/*
Object Instance

1.JavaScript is an object-based language based on prototypes, rather than being class-based.

2.Because of this different basis, it can be less apparent how JavaScript allows you to create hierarchies of objects and to have inheritance of properties and their values.

3.The term instance has a specific technical meaning in class-based languages.

4.In these languages, an instance is an individual instantiation of a class and is fundamentally different from a class.

5.In JavaScript, "instance" does not have this technical meaning because JavaScript does not have this difference between classes and instances.

6.However, in talking about JavaScript, "instance" can be used informally to mean an object created using a particular constructor function.

7.So, in this example, you could informally say that jane is an instance of Engineer.

8.Similarly, although the terms parent, child, ancestor, and descendant do not have formal meanings in JavaScript; you can use them informally to refer to objects higher or lower in the prototype chain.
*/

/*4.Section--------------------------------------------------------------------------------------------------------------------*/

/*
this Keyword in JavaScript
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:

1. In an object method, this refers to the object.

2. Alone, this refers to the global object.

3. In a function, this refers to the global object.

4. In a function, in strict mode, this is undefined.

5. In an event, this refers to the element that received the event.

6. Methods like call(), apply(), and bind() can refer this to any object.

this in a Method

When used in an object method, this refers to the object.
In the given code, this refers to the person object.
Because the fullName method is a method of the person object.

*/

/*5.Section--------------------------------------------------------------------------------------------------------------------*/

/*What is _proto_/prototype*/
var User = function(firstName, courseCount){// this is called constructer function. Functional way of definig a object.
   this.firstName = firstName;
   this.courseCount = courseCount;
   this.getCourseCount = function(){
    console.log(`Course count is: ${this.courseCount}`);
   };//Blueprint for every single user who's gonna sign up to the website
};//this is a prototype almost like a blueprint

//1. run this to see the problem.
/* var jd = User("JD", 2);//this right here is not creating object*///When we were not using new keyword it gave undefined as an output because at that point of time this User("JD", 2); was a reguler function call and this keyword was pointing towards the window/global object.In our case of node it was pointing to empty object. 

//2. then run this to see what happen it gives u the object.
//If we want to create an object through functional way then the new keyword is being used.
var jd = new User("JD", 2);// this new keyword is not only gonna create object for it it's gonna do multiple task for it.
// the new keyword is responsible for using syntax User
// the new keyword is responsible for invoking the constructor and creating a unique instance every single time
// no matter how many time u use the new keyword a new copy of User Object will be created.
// another thing new keyword does as soon as we use new keyword with function call(Ex:var jd = new User("JD", 2);). then the new keyword creates a copy of var User = .., Also moves the this keyword from the global object to inside of var User = ..
//console.log(jd); //As soon as we use new keyword then it's not a reguler function call.
jd.getCourseCount();
console.log(jd.firstName);

//When you want to add some properties on a bigger scale project into the main core object definition Ex: var User = Function{}..
// we saw that every object(main core definition Ex: var User) has a access of something known as prototype __proto__
// In order to access that through programatic way we use,
//Whenever we create an object through functional approach in order to add or access properties of that object we use prototype.
User.prototype.getFirstname = function(){//Injecting the another function into the object without touching the object. from outside the object.
   console.log(`Your first name is ${this.firstName}`);//advantage of this is whenever a new instance of that object is created by new keyword(var jd = new User("JD", 2);). It's the job again of new keyword(var jd = new User("JD", 2);) to even find all this such prototype User.prototype.getFirstname = function() which are defined and inject that further in my User object(var User = function()..).
};

jd.getFirstname();//note: every funtion in javaScript  has property called prototype





