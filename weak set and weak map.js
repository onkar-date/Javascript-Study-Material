// ********************************** Weak Set *****************************************\
/*
In javascript, a Set is a collection of unique and ordered elements. Just like Set, WeakSet is also a
collection of unique and ordered elements with some key differences:

1. Weakset contains only objects and no other type.
2. An object inside the weakset is referenced weakly. This means, that if the object inside the weakset
   does not have a reference, it will be garbage collected.
3. Unlike Set, WeakSet only has three methods, add() , delete() and has().
*/
const newSet = new Set([4, 5, 6, 7]);
console.log(newSet); // Outputs Set {4,5,6,7}

try {
  const newSet2 = new WeakSet([3, 4, 5]); //Throws an error
} catch (e) {
  console.log(`Error 1 = ${e.message}`);
}

let obj1 = { message: "Hello world" };
const newSet3 = new WeakSet([obj1]);
console.log(newSet3.has(obj1)); // true

// ********************************** Weak Map *****************************************\
/*
In javascript, Map is used to store key-value pairs. The key-value pairs can be of both primitive and
non-primitive types. WeakMap is similar to Map with key differences:

The keys in weakmap should always be an object.
If there are no references to the object, the object will be garbage collected.

*/
const map1 = new Map();
map1.set("Value", 1);

const map2 = new WeakMap();
try {
  map2.set("Value", 2.3); // Throws an error
} catch (e) {
  console.log(`Error 2 = ${e.message}`);
}

let obj = { name: "Vivek" };
const map3 = new WeakMap();
map3.set(obj, { age: 23 });
