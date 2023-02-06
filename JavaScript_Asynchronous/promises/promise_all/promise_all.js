/*
The Promise.all() method in JavaScript is used to take an iterable (e.g. an array)
of promises as an argument and returns a single promise that resolves when all of the promises in the iterable have resolved, or rejects with the reason of the first promise that rejects.
*/

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  });
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 2000);
  });
  
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log(results); // Output: ["Promise 1 resolved", "Promise 2 resolved"]
    })
    .catch((error) => {
      console.error(error);
    });
  
