// https://www.scaler.com/topics/callback-hell-in-javascript/
// In JavaScript, everything (strings, arrays, functions) is considered an object.
// Hence, the concept of callbacks lets us pass functions as arguments to another function
// which will be executed later within the outer function.

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}

function compute(callBack, x, y) {
  console.log(callBack);
  return callBack(x, y);
}

console.log(compute(divide, 10, 5)); // 2
console.log(compute(multiply, 10, 5)); // 50
console.log(compute(add, 10, 5)); // 15
