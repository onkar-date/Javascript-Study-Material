// Object Creation

// 1.  Using Literal
console.log("**************** Using Literal ****************");
var patient = { name: "", address: "" };
patient.admit = function () {
  console.log("Admitted");
};
console.log(patient);
patient.admit();

// 2.   Using object.create
// Objec.create will return empty object but has access to all the functions and properties of the object from which it is created
console.log("\n**************** Using object.create ****************");
var newPatient = Object.create(patient);
console.log(newPatient); // {}
newPatient.admit();

// 3.   Using Constructor Function

console.log("\n**************** Using Constructor Function ****************");

function Patient() {
  this.name = "";
  this.address = "";
  this.admit = function () {
    console.log("Admitted");
  };
}

// // Without New Keyword (Object will not get created)
const p1 = Patient();
console.log("p1 = ", p1);
console.log("type of P1 = ", typeof p1);

// // With New Keyword
const abc = new Patient();
console.log("abc = ", abc);
abc.admit();
console.log("type of ABC = ", typeof abc);

// 4.   Using Class (ES6)

console.log("\n**************** Using Class (ES6) ****************");

class PatientClass {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  admit() {
    console.log("Patient admitted");
  }
}
var jon = new PatientClass("ABC", "PQR");
var james = new PatientClass();
console.log(jon);
console.log(james);
jon.admit();

// ********************************** Object Destructuring *****************************************\

console.log("\n**************** Object Destructuring ****************");
const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard: 1,
};

const {
  strength: classStrength,
  benches: classBenches,
  blackBoard: classBlackBoard,
} = classDetails;

console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1
