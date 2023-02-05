const Jd = {
    firstname : "J",
    lastname : "D",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
        First name is ${this.firstname}
        Last name is ${this.lastname}
        role is ${this.role}
        current number of courses being used ${this.courseCount}
        `);
    },
};

const dj = {
    firstname : "Rock",
    lastname : "Dj",
    role : "Sub-Admin",
    courseCount : 4,
}

//Jd.getInfo();
//dj.getInfo();

//Borowing of the method.
// What bind does it binds the object. but you can change this binding to .bind actually gives you reference

//Jd.getInfo.bind()//right now by defualt bind is pointing towards Jd but we can pass on a parameter/argument inside bind
Jd.getInfo.bind(dj);// here we are passing dj as an argument and bind is pointing towards dj //now the this reference is not pointing towards Jd but to dj
//after running this nothing would happen in the console because bind always gives you reference back and you have to do something with that reference.

// Now there are two ways of running 

/*1.*/Jd.getInfo.bind(dj)();//curring

/*2. way by storing the reference*/

var donk = Jd.getInfo.bind(dj);
donk();

//there is a similar method as well 'call()' where bind gives you reference of the method back and you have to manually call that method.  call() method directly calls it.
//EX: 

Jd.getInfo.call(dj);
