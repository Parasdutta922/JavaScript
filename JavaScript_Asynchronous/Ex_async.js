const fs = require("fs")

/*function readData(){
   fs.readFile("Data.txt",);//this readFile() takes two parameter 1st file name from which to read and second callback which will be executed after reading has been completed
}*/

const printData = function(err, data){// this takes 1 parameter => we can pass this as a callback. =>// 2.) which function is taking two parameter if there are any error or data 
    if(!err){// and we can say there is no error that means we have got data 
        console.log(data.toString());// so we are printing that data
    }  
}

fs.readFile("Data.txt", printData); // now this read file function takes two parameter 1st is the file and second callback and callback should have two parameter 1st is error and 2nd is data
// 1.) this read file is an asynchronous, Input-outout operation which involves calling our file system and this could take a while 
//what we are doing is plz read the file and when you have read the file plz call my printdata function 
