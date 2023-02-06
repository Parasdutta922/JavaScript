module.exports.verifying = (card)=>{
    //creating a promise
    const promise = new Promise((resolve, reject)=>{
        if(!card){
            reject("card is empty");
        } 
        setTimeout(()=>{
            //verifying card
            //console.log("card verified");
            resolve(true);
            //resolve(true);//what if i call this resolve twice method inside then will be called twice and then money will be deducted twice.=> no becuase in on promise you can only call resolve once.
         },4000)
    });
    return promise;
}