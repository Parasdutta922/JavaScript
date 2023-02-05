/*Lexical scoping, also known as static scoping, is a convention used with many modern programming languages.
 It refers to setting the scope, or range of functionality,
 of a variable so that it may be called (referenced) from within the block of code in which it is defined.*/

//execution context of the funtion rolls at the top of the global execution context of javascript
//

function init(){// init is a shortcut for initialization
  var firstname = "hitesh";
  function sayFirstname(){
    console.log(firstname);
  }
  sayFirstname();
}

init();// calling this funtion on top of the global execution context then init context is gonna come up
//then init will run and try to declare a variable
//then the function sayFirstname is declared  
// as soon as we call sayFirstname() on top of this init execution context another context is gonna mount up and that
// will be sayFirstname() as soon as the sayFirstname() executes that executional context will go away
// and then since this funtion is already run this init context will be also removed and again the context will be normal.
console.log(firstname);
