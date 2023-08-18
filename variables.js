// ********************************** Variables in Javascript ****************************************************\
// 1) var
// 2) const
// 3) let

// Variable Declaration

console.log("\n************* Variable Declaration ******************");
var a = 10;
let b = 20;
const c = 30;
console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);

// Hoisting
// 1) var :- variable declared using var is hoisted and can be accessed anywhere
// 2) let :- variable declared using let is hoisted but cannot be accessed before initialization
// 3) const :- variable declared using const is hoisted but cannot be accessed before initialization

console.log("\n************* Hoisting ******************");
console.log("a = ", a1);
var a1 = 10;
try {
  console.log("b1 = ", b1); // Cannot access 'b1' before initialization
} catch (e) {
  console.log("Error for b1 = ", e.message);
}
let b1 = 20;
try {
  console.log("c1 = ", c1); // Cannot access 'c1' before initialization
} catch (e) {
  console.log("Error for c1 = ", e.message);
}
const c1 = 30;

console.log("\n************* Reassignment ******************");
// Resassigning values
// 1) var :- can be reassigned
// 2) let :- can be reassigned
// 3) const :- cannot be reassigned

var a2 = 10;
console.log("a2 = ", a2);
let b2 = 20;
console.log("b2 = ", b2);
const c2 = 30;
console.log("c2 = ", c2);
a2 = 20;
console.log("after reassign a2 = ", a2);
b2 = 40;
console.log("after reassign b2 = ", b2);
try {
  c2 = 60;
  console.log("after reassign c2 = ", c2); // Assignment to constant variable.
} catch (e) {
  console.log(`Error for c2 = ${e.message}`);
}

// Scope of Variables

console.log("\n************* Scope Of Variables ******************");

// 1) var :- can be reassigned
// 2) let :- can be reassigned
// 3) const :- cannot be reassigned

var a3 = 10;
let b3 = 20;
const c3 = 30;
function abc() {
  console.log("a3 = ", a3);
  console.log("b3 = ", b3);
  console.log("c3 = ", c3);
}
abc();

function abc2() {
  var a4 = 10;
  let b4 = 20;
  const c4 = 30;
}
abc2();
try {
  console.log("a4 = ", a4);
} catch (e) {
  console.log(`Error for a4 = ${e.message}`);
}
try {
  console.log("b4 = ", b4);
} catch (e) {
  console.log(`Error for b4 = ${e.message}`);
}
try {
  console.log("c4 = ", c4);
} catch (e) {
  console.log(`Error for c4 = ${e.message}`);
}
