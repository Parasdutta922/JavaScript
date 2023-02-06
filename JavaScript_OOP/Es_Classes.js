//Note: JavaScript is not a class-based object-oriented language. But it still has ways of using object-oriented programming (OOP).
//ES Classes and instance(Object)

/*class greeting{
    constructor(name){
       this.name = name; 
    }
}

greet = new greeting('david');
console.log(greet)*/
/*this keyword for regular function calls, this points to window object.*/

// what is super keyword?
/*
The "super" keyword is an important aspect of inheritance in JavaScript,
 as it provides a way to access and call methods and properties in the parent class from the subclass,
 and to inherit properties and behavior from the parent class in a structured way.
*/

class User{
    constructor(name, email){
        this.name  = name;
        this.email = email;
    }
    #courseList  = [];//private variable of this class cannot be accessed directly

    getinfo() {//getter 
        return {name: this.name, email: this.email};
    }

    enrollCourse(name){//setter
        this.#courseList.push(name);
    }
    
    getCourseList(){
        return this.#courseList;
    }

    /*static*/ login(){// static means no other class can inherit this it restricts the accessibility to the parent class only
      return "you are logged in";
    }
}

/*
In short, extending a class is a powerful tool for creating reusable,
 organized, and flexible code in object-oriented programming,
 and it is a key aspect of many programming languages, including JavaScript.
*/

class SubAdmin extends User{// Inheriting properties and methods of class User into class SubAdmin which means now class SubAdmin can use those properties and methods of class User. 
   constructor(name, email){
    super(name, email);
   }
    getAdmininfo(){
    return "I am subadmin";
   }
   login(){
    return "Login for admin only";
   }
}

const tom = new SubAdmin("tom", "tom@gmail.com");
console.log(tom.getAdmininfo());
console.log(tom.login());
console.log(tom.getinfo());













//creating object from the class

/*let user = new User('Jd', 'Jd@gmail.com');
user.enrollCourse('almabetter');
let course = user.getCourseList();
console.log(course);
console.log(user)*/


module.exports = User; // Exporting class User which means we can use this class in a another files
