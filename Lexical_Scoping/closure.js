/*A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 In other words, a closure gives you access to an outer function's scope from an inner function.*/


 
 //Ex1:
 /*function init(){// init is a shortcut for initialization
    var firstname = "JD";
    function sayFirstname(){
      console.log(firstname);
    }
    return sayFirstname;
  }

  var value = init();
  value();*/
//--------------------------------------------------------------------------------------------------------------------
//Ex2:
  function doadd(x){
      return function(y){
        return x+y;
      }
  }

  let add = doadd(5);// holding reference of doadd() function execution in variable add.
  console.log(add(9));

  //alternative in which you don't need to hold reference every time since the funtion is reguler function.
doadd(7)(7);//first parentheses for first function execution and second parentheses for second function execution.
//works as nested execution. It is possible because of the closure.

//since in the memory one reference of that funtion is present it just doesn't execute and goes away.