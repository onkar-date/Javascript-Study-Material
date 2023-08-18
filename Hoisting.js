//************************************** Hoisting ************************************** */

// Hoisting is the default behaviour of javascript where all the variable and function declarations are
// moved on top.

// This means that irrespective of where the variables and functions are declared,
// they are moved on top of the scope. The scope can be both local and global

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
var hoistedVariable;
console.log(hoistedVariable); // outputs 3 even here also

hoistedFunction(); // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction() {
  console.log(" Hello world! ");
}

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:
