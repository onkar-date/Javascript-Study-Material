// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// *********************************** Constructor ***********************************
// The Array() constructor creates Array objects.
// console.log(new Array(1));
// console.log(new Array(2));
// console.log(new Array(1, 2));
// console.log(new Array(1, 2, 3, 4, 5, 6));

// console.log(Array());
// console.log(Array(1));
// console.log(Array(2));
// console.log(Array(1, 2));
// console.log(Array(1, 2, 3, 4, 5, 6));

// Note: Array() can be called with or without new. Both create a new Array instance.

// *********************************** forEach ****************************************

// forEach will iterate over all the elements of an array
// forEach will not return any value.

// const a = [1, 2, 3, 4, 5];
// a.forEach((num) => {
//   console.log(`Square of ${num} is ${num * num}`);
// });
// let sum = 0;
// a.forEach((num) => {
//   sum = sum + num;
// });
// console.log(sum);
// *********************************** map ****************************************

// map will iterate over all the elements of an array
// map will return modified version of the element for each element in the array based on user action.
// Length of the array created by map function will always be same as the length of array on which map is applied.

// const a = [1, 2, 3, 4, 5];
// const squaredArr = a.map((num) => {
//   return num * num;
// });
// console.log(squaredArr);

// *********************************** Filter ****************************************

// Filter will iterate over all the elements of an array
// Filter will return only those elements of array for which predicate satisfies i.e. filter will create a array of
// those elements for which the code returns true in callback function.
// Length of the array created by Filter function will be either equal to or less than original array.

// const a = [1, 2, 3, 4, 5];
// const evenNum = a.filter((num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(evenNum);
// const oddNum = a.filter((num) => {
//   // Method 1
//   //   if (num % 2 == 1) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   //   Method 2
//   return num % 2 == 1;
// });
// console.log(oddNum);

// *********************************** Find ****************************************

// Find will iterate over all the elements of an array untill the conditions satisfies.
// Find will return the first element for which the conditions satisfies (or element for which your callback function returns true)
// Find will not create a array but will return the element from an array
// If condition is not satisfied for any of the element from array then undefined will be returned.

// const a = [1, 2, 3, 5, 5, 1, 4, 5, 5, 1];
// const num5 = a.find((num) => {
//   console.log(`Checking ${num}`);
//   if (num === 5) {
//     return true;
//   }
//   return false;
// });
// console.log(num5);
// const num10 = a.find((num) => {
//   console.log(`Checking ${num}`);
//   if (num === 10) {
//     return true;
//   }
//   return false;
// });
// console.log(num10);

// const users = [
//   {
//     name: "abc",
//     age: 20,
//   },
//   {
//     name: "pqr",
//     age: 50,
//   },
//   {
//     name: "xyz",
//     age: 90,
//   },
//   {
//     name: "def",
//     age: 100,
//   },
// ];

// console.log(
//   users.find((user) => {
//     if (user.name === "xyz") {
//       return true;
//     }
//   })
// );

// *********************************** Reduce ****************************************

// Reduce will iterate over all the elements of an array.
// Reduce takes 2 params --> 1) callback function with prev value and current value
//                           2) initial value (you can use initial value to initialize your setup)
// For first iteration prev value will be same as initial value
// Whatever you return in callback function will be assigned to prev value for next iteration
// current value will hold value of the each element of an array for each iteration.

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Using Reduce
// console.log("Using Reduce to calculate Sum");
// let sum = a.reduce((prevVal, currVal, index) => {
//   console.log({ iteration: index + 1, prevVal, currVal });
//   return prevVal + currVal;
// }, 0);
// console.log(sum);

// console.log("Using forEach to calculate Sum");
// // Using For Each
// let sum2 = 0;
// a.forEach((num) => {
//   sum2 = sum2 + num;
//   console.log({ num, sum2 });
// });
// console.log(sum2);

// *********************************** Join ****************************************

// Joins elements of an array using provided seperator (comma is default seperator)

// const a = [1, 2, 3, 4];
// console.log(a.join("-")); // 1-2-3-4
// console.log(a.join("")); // 1234
// console.log(a.join()); // 1,2,3,4

// *********************************** Reverse ****************************************

// console.log(["1", 2].reverse());

// *********************************** Questions ****************************************

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// output = [4, 16, 36, 64]

// Method 1
// const result = [];
// arr.forEach((num) => {
//   if (num % 2 === 0) {
//     result.push(num * num);
//   }
// });
// console.log(result);

// Using Map And Filter
// const result = arr
//   .filter((num) => {
//     return num % 2 === 0;
//   })
//   .map((num) => {
//     return num * num;
//   });
// console.log(result);
