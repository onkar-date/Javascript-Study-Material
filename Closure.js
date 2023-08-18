/* A closure is the combination of a function and the lexical environment within which that function was declared.
   This environment consists of any local variables that were in-scope at the time the closure was created.
*/

function closureFunction() {
  var x;
  function increment() {
    x++;
  }
  function decrement() {
    x--;
  }
  function getX() {
    return x;
  }
  function init() {
    x = 10;
  }
  init();
  return {
    increment,
    decrement,
    getX,
  };
}
const ref = closureFunction();
console.log(ref.getX());
ref.increment();
console.log(ref.getX());
ref.decrement();
console.log(ref.getX());
ref.init();

/* Use of closures
    1. Self contained modules
    2. Self contained states
    3. Solves global variables problem
    4. Helps to expose only what you want
*/
