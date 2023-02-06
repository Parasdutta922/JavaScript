// callbaks drawback could be called many times  and not having control of the third party code

const cardverification = require("./card_verification");

function getcarddetails(){
   console.log("card received");
   const card = "9988 7766 6655 5544";
   cardverification.verify(card, deductmoney);
}

function deductmoney(card, amount){
    console.log("amount deducted");
}

getcarddetails();