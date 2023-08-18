// Promises:
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value. It provides a way to handle the results of asynchronous operations in a
// more readable and manageable manner.

// Promises have three states:
// 1. Pending: The initial state of a promise. It means that the asynchronous operation is still in progress.
// 2. Fulfilled: The state of a promise when the asynchronous operation is completed successfully, and a value is available.
// 3. Rejected: The state of a promise when the asynchronous operation encounters an error or fails,
//    and a reason for the failure is provided.

// Promises can be created using the `Promise` constructor,
// which takes a callback function with two parameters: `resolve` and `reject`. The `resolve`
// parameter is a function that is called when the asynchronous operation is successfully completed,
// and the `reject` parameter is a function called when an error occurs.

const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Operation succeeded
    } else {
      reject(new Error("Random number is too low")); // Operation failed
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    console.log("Promise rejected:", error);
  });

// In the above example, a promise is created to simulate an asynchronous operation that resolves with
// a random number greater than 0.5. The `then` method is used to handle the fulfilled state and
// receive the resolved value, while the `catch` method is used to handle the rejected state and receive the error.
