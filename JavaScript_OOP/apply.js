/*The Function.prototype.apply() method allows you to call a function with a given this value and arguments provided as an array.
The apply() method accepts two arguments:

The thisArg is the value of this provided for the call to the function fn.
The args argument is an array that specifies the arguments of the function fn. Since the ES5, the args argument can be an array-like object or array object.
The apply() method is similar to the call() method except that it takes the arguments of the function as an array instead of the individual arguments.*/

//EX1:
const person = { // Object
    firstname :"j",
    lastname :"d"
};

function greet(greeting, message){
    return `${greeting} ${this.firstname}. ${message}`;
}/*
The greet() function accepts two parameters: greeting and message.
Inside the greet() function, we reference an object that has the firstName property.
*/

let result = greet.apply(person, ['Hello', 'How are you?']);
console.log(result);/*
In this example, we set the this value inside the function to the person object. The arguments of the greet() function was passed into the apply() method as an array.
The apply() method invoked the greet() function with the this value set to the person object and arguments as an array ['Hello', 'How are you?'].
*/

//EX2:
//Function borrowing

const computer = {//object
     name : "Macbook",
     isON :  false,
     turnOn(){
        this.isON = true;
        return `The ${this.name} is On`;
     },
     turnOff(){
        this.isON = false;
        return `The ${this.name} is Off`;
     }
};

const server = { //Another object
    name : 'Dell PowerEdge T30',
    isOn : false
};/*
The server object doesn’t have the turnOn() and turnOff() methods.
*/

/*
To execute the turnOn() method of the computer object on the server object, you can use the apply() method as follows:
*/
let borrow = computer.turnOn.apply(server);// passing the object name in which to use the method
console.log(borrow);/*In this example, the server object borrows the turnOn() method of the computer object.*/

//Ex3:
//Using the apply() method to append an array to another
let arr = [1,2,3];
let numbers = [1,2,3];

arr.push.apply(arr, numbers);
console.log(numbers);/*
In this example, the apply() method modifies the original array arr.
 Note that the Array.prototype.concat() method also provides the same result except that it returns the new array instead of modifying the original array.
*/

/*
The apply() method invokes a function with a given this value and arguments provided as an array.
The apply() method is similar to the call() method excepts that it accepts the arguments of the function as an array instead of individual arguments.
*/



