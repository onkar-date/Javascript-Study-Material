/*
    1. Design patterns are reusable solutions to commonly occurring problems in software design.
    2. Design Patterns are time tested architecture solutions
    So, to create single solution we can use singleton pattern, if the object creational process is complex
    we can use factory pattern and so.
    3. Most used design pattern :- Module design pattern or Module revealing pattern

    Module Pattern Advantages :- 
        1.  It can be used to create self-contained independent components
        2.  Provides encapsulation and abstraction
    
    Module Pattern = IIFE + Closures
*/

var custNamespace = (function () {
  function Customer() {}
  function CustomerInvoices() {
    const isValid = CustomerValidation();
  }

  // Private method, will not be exposed
  function CustomerValidation() {}

  return {
    Customer,
    CustomerInvoices,
  };
})();

var supplierNamespace = (function () {
  function Supplier() {}
  function SupplierInventory() {}
  return {
    Supplier,
    SupplierInventory,
  };
})();
