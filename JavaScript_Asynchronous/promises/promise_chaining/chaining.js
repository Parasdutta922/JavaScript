const promise = new Promise((resolve, reject) => {//1.creating a promise
    resolve();//2. resolving the promise
    
});

promise.then(()=>{//after resolving that promise we call three then methods(handlers) chained one after the other 
    console.log('first');
})
.then(()=>{
    console.log('second');
})
.then(()=>{
    console.log('third');
})
.catch((error)=>{
  console.log(error);
});