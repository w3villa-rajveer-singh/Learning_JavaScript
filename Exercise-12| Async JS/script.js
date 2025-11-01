// Topic: Asynchronous JS

// Q1. Create a function that logs a message after 2 seconds using setTimeout.

setTimeout(() => {
    console.log("Hello, World!");    // Message will be printed after 2 seconds..
}, 2000);



// Q2. Build a Promise that resolves after 1 second and logs a message.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise will be resolved after 1 second!");
    }, 1000);
  });
  
  myPromise.then((message) => {
    console.log(message);
  });
  
  
// Q3. Chain .then() and .catch() to handle resolved and rejected cases.

const fetchData = new Promise((resolve, reject) => {
    let success = true; // try changing it to false to test rejection
  
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
  
  // Handling promise
  fetchData
    .then((result) => {
      console.log(result); // runs if resolved
    })
    .catch((error) => {
      console.log(error); // runs if rejected
    })
    .finally(() => {
      console.log("Operation completed.");
    });
  

