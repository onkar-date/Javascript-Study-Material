// ************************ Classes ********************************
/*
    1. Classes use Constructor function internally
    2. Class are just syntactical sugar for constructor functions
    3. Classes are not hoisted
    4. All code inside class is executed in strict mode
*/
// ************************ Prototype Inheritence ********************************
// Code Starts
// const Person = function (firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// };
// Person.prototype.hey = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// Person.hey = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// const jon = new Person("Jon", 25);
// jon.hey(); // Hey Jon
// Person.hey(); // Hey undefined

// Code Ends

// ************************ Static Methods ********************************
// Code Starts
// const Person = function (firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// };
// Person.hey = function () {
//   console.log(`Hey There`);
// };
// const jon = new Person("Jon", 25);
// jon.hey(); // TypeError: jon.hey is not a function
// Person.hey(); // Hey There
// Code Ends

// Using Class
// Code Starts
// class PersonClass {
//   constructor(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
//   }

//   hey() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   static hey() {
//     console.log("Hey There");
//   }
// }

// const jonCl = new PersonClass("JonCl", 30);
// jonCl.hey(); // Hey JonCl
// PersonClass.hey(); // Hey There

// Code Ends

// ************************ Getters and Setters ********************************
// Code Starts
// const account = {
//   owner: "Jonas",
//   movement: [10, 20, 45, 20],
//   get latest() {
//     return this.movement.slice(-1).pop();
//   },
//   set latest(n) {
//     this.movement.push(n);
//     return this.movement;
//   },
// };
// console.log(account.latest);
// account.latest = 60;
// console.log(account.latest);
// Code Ends

// ************************ Object.create ********************************
// Code Starts
// const PersonProto = {
//   printAge() {
//     console.log(this.age);
//   },
//   init(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
//   },
// };
// const steven = Object.create(PersonProto);
// steven.init("Steven", 25);
// steven.printAge();
// Code Ends

// ************************ Inheritance Between Classes: Constructor Functions ********************************
// Code Starts
// const Person = function (firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// };
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// const Student = function (firstName, age, course) {
//   Person.call(this, firstName, age);
//   this.course = course;
// };

// // Linking Prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.printCourse = function () {
//   console.log(this.course);
// };
// const david = new Student("David", 19, "Algebra");
// david.printCourse(); // Algebra
// david.printAge(); // 19
//  Code Ends

// ************************ Inheritance Between Classes: ES6 Classes ********************************
// Code Starts
// class Person {
//   constructor(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   constructor(firstName, age, course) {
//     super(firstName, age);
//     this.course = course;
//   }
// }

// const abc = new Student("Abc", 20, "Maths");
// console.log(abc);
// Code Ends

// ************************ Encapsulation ********************************
// Use # before variable name to imply that variable is protected and should not be accessed directly
// A language mechanism for restricting direct access to some of the object's components
// code starts
// class BankUser {
//   // Public Field
//   timing = "9AM to 4PM";

//   // private field
//   #balance;

//   constructor(firstName, balance) {
//     this.firstName = firstName;
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//     console.log(`Deposited ${amount}. Balance is ${this.#balance}`);
//     return this;
//   }

//   withdraw(amount) {
//     this.#balance -= amount;
//     console.log(`Withdraw ${amount}. Balance is ${this.#balance}`);
//     return this;
//   }

//   checkBalance() {
//     return this.#balance;
//   }

//   // Private
//   #approveLoan() {
//     if (this.#balance >= 10000) {
//       return true;
//     }
//     return false;
//   }
// }

// const rock = new BankUser("Rock", 10000);
// rock.deposit(500);
// // rock.#balance = 100000; // SyntaxError: Private field '#balance' must be declared in an enclosing class
// // rock.#approveLoan(); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// // Chainig Methods
// // return this at end of function to chain the functions

// rock.deposit(100).deposit(200).withdraw(300);
// Code Ends
