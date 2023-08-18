// ********************************** Temporal Dead Zone *****************************************\
/*
    1.  TDZ is a period or a state of variable where variables are named in memory but they are
        not initialized with any value
*/

// This is TDZ
try {
  console.log(x); // <--- Error because we are in TDZ
} catch (e) {
  console.log(`Error 1 = ${e.message}`);
}
// This is TDZ
// This is TDZ
// This is TDZ
try {
  console.log(x); // <--- Error because we are in TDZ
} catch (e) {
  console.log(`Error 2 = ${e.message}`);
}
// This is TDZ
// This is TDZ
let x = 10; // TDZ Ended

function TDZDemo() {
  // This is TDZ
  try {
    console.log(y); // <--- Error because we are in TDZ
  } catch (e) {
    console.log(`Error 3 = ${e.message}`);
  }
  // This is TDZ
  // This is TDZ
  // This is TDZ
  try {
    console.log(y); // <--- Error because we are in TDZ
  } catch (e) {
    console.log(`Error 4 = ${e.message}`);
  }
  // This is TDZ
  // This is TDZ
  let y = 10; // TDZ Ended
}

TDZDemo();
