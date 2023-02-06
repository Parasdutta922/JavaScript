const promise = new Promise((resolve, reject)=>{
    resolve();
})

/* promise.then(()=>{
    console.log('first');
}).then(()=>{
    setTimeout(()=>{
        console.log("second")
    },2000);
}).then(()=>{
    setTimeout(()=>{
        console.log('third');
    },1000);
}) */
// when you attach multiple then handlers it's not guaranteed that the next then handler will be called only after the previous then handler finishes its work if there some asynchronous code inside that then handler

//we can fix the above code to execute in the intended order.

// what we can do is we can return a new promise from the second then handler and only call
// resolve or reject once we are done with our api call or whatever other long-running operation we are trying to do 
// this will guarantee that the next then handler will always be executed after the previous one has finished this is 
//because when we call a promise the promise will untill we explicitly call resolve or reject inside the promise.

promise.then(()=>{
    console.log('first');
}).then(()=>{
    return new Promise((resolve, reject)=>{//returning a promise 
           setTimeout(()=>{
            console.log('second');//after setTimeout is completed running only then we print and call resolve().
            resolve();
           }, 2000);
    });
}).then(()=>{
    setTimeout(()=>{
        console.log('third');
    },1000);
});