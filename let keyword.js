// ********************************** LET Keyword ****************************************************\
/*
    1.  Let keyword helps to create immediate BLOCK level scope
    2.  Variables with Let keyword are hoisted but are not initialized so you will get error.
*/

function letScopeDemo() {
  let x = 10;
  if (x === 10) {
    let x = 20;
    console.log("Inside x = ", x);
  }
  console.log("Outside x = ", x);
}
letScopeDemo();

function hoistingDemo() {
  console.log(x + 20);
  console.log(y + 20);
  var x = 10;
  let y = 20;
}
hoistingDemo(); // <---- Error :- ReferenceError: Cannot access 'y' before initialization
