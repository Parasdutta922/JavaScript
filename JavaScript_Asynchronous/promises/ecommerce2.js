const cardverify = require("./promise.js");

async function getcarddetails(){
    //read card from inputs.
    console.log("card received");
    const card = "9990 990 99";
     //const promise = cardverify.verifying(card);
     //console.log(promise);
     //1. using then function/method
     /*promise.then(
        //execute when promise is resolved.
        (result)=>{
            console.log(result);
            deductmoney();// who is calling this function. It will be called as soon as your promise is resolved
        },
        // execute when promise is rejected
        //can only handle error from the body of promise
        (err)=>{
            console.log("error block");
            console.log(err);
        }
     ).catch(err=>{//can handle error from body of promise as well as after resolution if there are any error
        console.log("error in catch");
        console.log(err);});
    *///2. using async/await
    try{
        const result = await cardverify.verifying(card);
        console.log(result);
        deductmoney();
     }catch(err){
        console.log(err);
     }
}
   
 function deductmoney(card, amount){// how will i know that promise is completed
   // throw new Error("Unhandled error");
    console.log("amount deducted");
 }
 
 getcarddetails();