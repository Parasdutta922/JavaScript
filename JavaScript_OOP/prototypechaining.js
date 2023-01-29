//Prototype chaining.
/*
Every object in JavaScript has a built-in property, which is called its prototype.
 The prototype is itself an object, so the prototype will have its own prototype,
  making what's called a prototype chain.The chain ends when we reach a prototype that has null for its own prototype.

What is use of prototype in JavaScript?
prototype. The prototype data property of a Function instance is used when the function is used as a constructor with the new operator.
 It will become the new object's prototype. Note: Not all Function objects have the prototype property
  
 What is prototype chaining?
 The prototype is itself an object, so the prototype will have its own prototype,
 making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
 Note: The property of an object that points to its prototype is not called prototype .
 
 
 */

var User = function(firstName, courseCount){// functional way of definig a  object.
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
     console.log(`Course count is: ${this.courseCount}`);
    };
};
               //Right now this property just a function but it can be a simple property just like a variable.
User.prototype.getfirstname = function (){
    console.log(`Your first name: ${this.firstName}`);
};

var dg = new User('DG',3);
dg.getCourseCount();
dg.getfirstname();

//a problem with prototype could be suppose there is no such property in the object as name(but has a property calles namee this little difference) but the prototype of that object is trying to access that property or that property wasn't injected correctly now when you try to console log it it gives an output: undefined which worse than error undefined doesn't exactly tells what's wrong.
// so writing the code which actually checks out all this things always a better case.
var yk = new User('YK',4);
yk.getCourseCount();
yk.getfirstname();

// Every function has property called prototype.

//one of the properties of prototype is hasOwnProperty.Which gives the name(of the object), length. So we can ask it how many properties you are having
// we can access the properties of prototype by using '.' operator with objects. And we don't need to say lco.prototype.hasOwnProperty();. We can directly access them.
if(dg.hasOwnProperty("firstNamee")){// checking if the property exist then only execute.
 dg.getfirstname();
}