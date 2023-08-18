// ********************************** Arrow Functions VS Regular functions *****************************************\
// 1.   Regular Functions are accessible or callable from anywhere in the code while we cannot call or access arrow functions

reg1();
function reg1() {
  console.log("regular 1");
}
arrow1(); // <---- ReferenceError: arrow1 is not defined
arrow1 = () => {
  console.log("arrow 1");
};
arrow2(); // <---- ReferenceError: Cannot access 'arrow2' before initialization
let arrow2 = () => {
  console.log("arrow 2");
};
arrow3(); // <---- TypeError: arrow3 is not a function
var arrow3 = () => {
  console.log("arrow 3");
};

// 2. Argument object is not available in arrow function

function addTowNumbers() {
  return arguments[0] + arguments[1];
}
console.log(addTowNumbers(4, 6)); // Output 10

// 3. Arrow functions do not have their own 'this'. the 'this' keyword is bound to parents context

// 4. arrow functions can not be used as constructors.
