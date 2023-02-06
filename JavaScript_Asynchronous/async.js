/*What is Synchronous
synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the 
one before it.
EX:let name = "Jd"; this is a synchronous task because after this variable is defined then only i can print  
   console.log(name);this variable name so in a way this 2nd operation is dependent to the first operation.

What is Asynchronous 
Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another task. Tasks can
run simultaneously.
Ex: 
    suppose there is a network call from your application or program. like,
       let result = calldb(); => this function execution here is a database call meaning a input-output call.
       console.log(result); => and this operation print the reponse returned from that database call.
But it doesn't behave that way that is the problem.

*/

// this is the problem 
function calldb(){
    setTimeout(()=>{
        console.log("Db call is done");
        console.log("------------------------------------------------------------------------\n")
        return 50;
    },4000);
}

const result = calldb();//undefined => what's happening here is that when the function calldb() executes it goes inside the function block then waits for 4 seconds and return 50(as a response) but there's no one to catch that response. The console.log is not a aysnchronous operation that why it is executed imediatelly. 
console.log(result);// Db call is done => this doesn't wait for the first operation to complete and print Db call is done.
/*Note: that returning and logging are two different things */

// to fix this we can use callback 
//what is callback?
/*To be able to make the other statement or operation to run after the asynchronous task. Not before the Asynchronous which means
1. To get the result from asnychronous operation. Because i want to do something after asynchronous operation is completed.

2. To be able to finish asynchronous operation. To wait for asynchronous task to finish.
*/

function callDb(printCb){// this function is taking another function as an parameter. 
    setTimeout(()=>{//2nd after waiting it executes console.log() and then it executes printCb(50)
        console.log("Db call is done")
        printCb(50);
    }, 4000);// when the 4 second wait is complete it executes the function printCb(50) with value 50 
}

const print = function(data){// this function takes single parameter which holds the value 50 passed onto it as an argument.
    console.log(data);//3rd then it console log the data which passed on to it.
}

const result1 = callDb(print);//Here we are passing another function inside and another function as an argument this is called callback because after the execution of the first operation(function) the second function(operation) will be executed.
               // 1st 