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
  
  async function showData() {
    try {
      const results = await Promise.all([promise1, promise2]);
      console.log(results); // Output: ["Promise 1 resolved", "Promise 2 resolved"]
    } catch (error) {
      console.error(error);
    }
  }
  
  showData();
  