// ********************************** LET Vs VAR *****************************************\
/*
1.  Scoping Rule :-
    var :- Variables created using var are scoped to immediate function body.
    let :- Variables created using let are scoped to immediate block body.

2.  Initialization During Hoisting
    var :- value initialized with undefined
    let :- Value initialized with nothing

3.  Access
    var :- if try to access before initialzing then value will be undefined
    let :- if try to access before initialzing then it will throw ReferanceError error (Cannot access without initialization)
*/

function letVsVarDiffDemo() {
  //   let y = 30;
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log("x = ", x);
  //   console.log("y = ", y);
}
letVsVarDiffDemo();
try {
  console.log(x); // ReferenceError: x is not defined
} catch (e) {
  console.log(`Error  = ${e.message}`);
}
