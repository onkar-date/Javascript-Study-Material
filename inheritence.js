// ********************************** inheritance ****************************************************
/*
    Javascript uses object inheritance or prototypical inheritance.
    Inheritance is done using Prototype object.
*/

function Employee() {
  this.name = "";
  this.DoWork = function () {
    console.log("Basic Work");
  };
  this.Attendance = function () {
    console.log("Attendance Needed");
  };
}

function Manager() {
  this.cabin = "";
  this.DoWork = function () {
    console.log("Manages Team");
  };
}

var emp = new Employee();
console.log(emp);
Manager.prototype = emp; // Important

var man = new Manager();
man.name = "ABC";
man.Attendance();
man.DoWork();

/*
    Prototype Chaining :- 

    Prototype Chaining is a process where proprty/methods are first checked in the current object

    If not found then it will check in prototype object

    If it doesn't find in prototype object also then it will look into prototype of prototype object

    It will keep looking untill it finds property/method or it find prototype as null
*/
