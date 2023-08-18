// Promises and observables are two important concepts in asynchronous programming,
// commonly used in JavaScript and other programming languages.
// Both promise and observable are used to handle asynchronous operations,
// but they have some fundamental differences. Let's explore each concept in detail with examples:

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

// Here's an example that demonstrates the basic usage of a promise:

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

// Observables:
// Observables, also known as streams, are a powerful concept from reactive programming that represents
// a sequence of values that are emitted over time. Observables are based on the Observable design
// pattern and provide a way to handle asynchronous operations and data streams more flexibly.

// Observables emit multiple values asynchronously, and they can also emit errors or signal completion.
// They allow you to subscribe to these emissions and define how to handle each value, error, or completion event.

// Here's an example that demonstrates the basic usage of an observable using the popular RxJS library:

import { Observable } from "rxjs";

const myObservable = new Observable((observer) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      observer.next(randomNumber); // Emit the next value
      observer.complete(); // Signal completion
    } else {
      observer.error(new Error("Random number is too low")); // Emit an error
    }
  }, 1000);
});

const subscription = myObservable.subscribe(
  (result) => {
    console.log("Observable next:", result);
  },
  (error) => {
    console.log("Observable error:", error);
  },
  () => {
    console.log("Observable complete");
  }
);

// Unsubscribe after 3 seconds
setTimeout(() => {
  subscription.unsubscribe();
}, 3000);

// In this example, an observable is created using the `Observable` constructor from the RxJS library.
// It emits a random number greater than 0.5 and completes, or emits an
