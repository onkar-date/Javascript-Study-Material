// https://www.tutorialrepublic.com/javascript-tutorial/javascript-es6-features.php
/**
 * 1. ECMAScript 2015 (or ES6) is the sixth and major edition of the ECMAScript language specification standard.
 *    It defines the standard for the JavaScript implementation.
 */

// Features Of ES6

//************************ Let Keyword ************************ */
//    ES6 introduces the new let keyword for declaring variables.
//    Prior to ES6, the only way to declare a variable in JavaScript was the var keyword.

console.log("\n************** Let keyword **********************\n");
// ES6 syntax
for (let i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}
console.log(i); // undefined

// ES5 syntax
for (var i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}
console.log(i); // 5

//************************ Const Keyword ************************ */

console.log("\n************** Const Keyword **********************\n");

// The new const keyword makes it possible to define constants.
// Constants are read-only, you cannot reassign new values to them.
// They are also block-scoped like let.

const PI = 3.14;
console.log(PI); // 3.14

try {
  PI = 10; // error
} catch (e) {
  console.log(`Error for const = ${e.message}`);
}

//************************ The for...of Loop ************************ */

console.log("\n************** The for...of Loop **********************\n");

// Iterating over array
let letters = ["a", "b", "c", "d", "e", "f"];

for (let letter of letters) {
  console.log(letter); // a,b,c,d,e,f
}

// Iterating over string
let greet = "Hello World!";

for (let character of greet) {
  console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
}

//************************ Template Literals ************************ */

console.log("\n************** Template Literals **********************\n");

// Simple multi-line string
let str = `The quick brown fox
    jumps over the lazy dog.`;

let str2 = "he quick brown fox jumps over the lazy dog.";

// String with embedded variables and expression
let a = 10;
let b = 20;
let result = `The sum of ${a} and ${b} is ${a + b}.`;
let result1 = "The sum of " + a + " and " + b + " is " + a + b;
console.log(result); // The sum of 10 and 20 is 30.
console.log(result1); // The sum of 10 and 20 is 30.

//************************ Default Values for Function Parameters ************************ */

console.log(
  "\n************** Default Values for Function Parameters **********************\n"
);

function sayHello(name = "World") {
  return `Hello ${name}!`;
}

console.log(sayHello()); // Hello World!   <--- if no value is provided then default value is assigned
console.log(sayHello("")); // Hello !
console.log(sayHello(false)); // Hello false!
console.log(sayHello(0)); // Hello 0!
console.log(sayHello(null)); // Hello null!
console.log(sayHello(undefined)); // Hello World! <--- undefined as treated as no value hence default value is assigned
console.log(sayHello("John")); // Hello John!

//************************ Arrow Functions ************************ */

console.log("\n************** Arrow Functions **********************\n");

// Function Expression
var sum = function (a, b) {
  return a + b;
};
console.log(sum(2, 3)); // 5

// Arrow function
var sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5

//************************ Classes ************************ */

console.log("\n************** Classes **********************\n");

class Rectangle {
  // Class constructor
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  // Class method
  getArea() {
    let a;
    const a1 = 10;
    var a2 = 10;
    return this.length * this.width;
  }
}

// Square class inherits from the Rectangle class
class Square extends Rectangle {
  // Child class constructor
  constructor(length) {
    // Call parent's constructor
    super(length, length);
  }

  // Child class method
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

let rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 50

let square = new Square(5);
console.log(square.getArea()); // 25
console.log(square.getPerimeter()); // 20

console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
console.log(rectangle instanceof Square); // false

//************************ Modules ************************ */

console.log("\n************** Modules **********************\n");

// Prior to ES6, there were no native support for modules in JavaScript.
// Everything inside a JavaScript application, for example variables across different JavaScript files,
// shared the same scope.

// ES6 introduces file based module, in which each module is represented by a separate .js file.
// Now, you can use the export or import statement in a module to export or import variables,
// functions, classes or any other entity to/from other modules or files.

//************************ The Rest Parametersr ************************ */

console.log("\n************** The Rest Parameter **********************\n");

// ES6 introduces rest parameters that allow us to pass an arbitrary number of parameters to a function
// in the form of an array. This is particularly helpful in situations when you want to pass parameters
// to a function but you have no idea how many you will need.

// A rest parameter is specified by prefixing a named parameter with rest operator (...)
// i.e. three dots. Rest parameter can only be the last one in the list of parameters,
// and there can only be one rest parameter

function sortNames(...names) {
  return names.sort();
}

console.log(sortNames("Sarah", "Harry", "Peter")); // Harry,Peter,Sarah
console.log(sortNames("Tony", "Ben", "Rick", "Jos")); // John,Jos,Rick,Tony

function myFunction(a, b, ...args) {
  return args;
}

console.log(myFunction(1, 2, 3, 4, 5)); // 3,4,5
console.log(myFunction(-7, 5, 0, -2, 4.5, 1, 3)); // 0,-2,4.5,1,3

//************************ The Spread Operator ************************ */

console.log("\n************** The Spread Operator **********************\n");

// The spread operator, which is also denoted by (...), performs the exact opposite function of the rest operator.
// The spread operator spreads out (i.e. splits up) an array and passes the values into the specified function

function addNumbers(a, b, c) {
  return a + b + c;
}

let numbers = [5, 12, 8];

// ES5 way of passing array as an argument of a function
console.log(addNumbers.apply(null, numbers)); // 25
console.log(addNumbers(numbers[0], numbers[1], numbers[2])); // 25

// ES6 spread operator
console.log(addNumbers(...numbers)); // 25

let pets = ["Cat", "Dog", "Parrot"];
let bugs = ["Ant", "Bee"];

// Creating an array by inserting elements from other arrays
let animals = [...pets, "Tiger", "Wolf", "Zebra", ...bugs];

console.log(animals); // Cat,Dog,Parrot,Tiger,Wolf,Zebra,Ant,Bee

//************************ Destructuring Assignment ************************ */

console.log(
  "\n************** Destructuring Assignment **********************\n"
);

// The destructuring assignment is an expression that makes it easy to extract values from arrays,
// or properties from objects, into distinct variables by providing a shorter syntax.

// There are two kinds of destructuring assignment expressions—the array and object destructuring assignment

console.log("\n* The array destructuring assignment\n");

// ES6 syntax
let fruits = ["Apple", "Banana"];

// Method 1
let f1 = fruits[0];
let f2 = fruits[1];

// Method 2 - Array Destructuring
let [fruit1, fruit2] = fruits; // Array destructuring assignment

console.log(fruit1); // Apple
console.log(fruit2); // Banana

console.log("\n* The object  destructuring assignment\n");

// ES6 syntax
let person = { name: "Peter", age: 28 };

// Method 1
const n2 = person.name;
const age2 = person.age;

// Method 2 --> variable name is different than key name
const { name: n1, age: age1 } = person;

// Method 3 --> variable name and key name are same
let { name, age } = person; // Object destructuring assignment

console.log(name); // Peter
console.log(age); // 28
console.log("\n");
console.log(n1); // Peter
console.log(age1); // 28
console.log("\n");
console.log(n2); // Peter
console.log(age2); // 28
