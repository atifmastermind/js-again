// ?  Array Destructuring:

// const vehicles = ["Swift", "Blackhawk", "Fortuner"];

// const [car, truck, suv] = vehicles;

// console.log("Car is", car);
// console.log("Truck is", truck);
// console.log("suv is", suv);

//? example:

let arr = [3, 5, 8, 9, 12, 14, 15];
// we can select array values and can give a name and print later on.
// let [a, b, c, d] = arr;
// we can print the others values using ...rest
// let [a, b, c, d, ...rest] = arr;
// if we want to select 1st value and then skip the 2 values and then print all other values in rest.
// let [a, , , , ...rest] = arr;
// console.log(a, rest);

// ? Object Destructuring:

// let gfg = {
//   fullName: "GeeksforGeeks",
//   type: "eduTech",
//   location: "Noida",
// };

// let { fullName, location: cLocation } = gfg;
// console.log("company Name is " + fullName + " which is located in " + cLocation);
//?  example
// let { a, b } = { a: 1, b: 5 };
// console.log(a, b);

// let a = {
//   name: "Muhammad Atif",
//   Company: "Neonstech",
//   desi: "Front End Developer",
//   location: "Karachi",
// };

// let myObject = ({ name: fullName, Company: heWorkedOn, desi: jd } = a);

// console.log(`Hello ${fullName} you are working on ${heWorkedOn} as ${jd} `);

// ? Spread syntax

// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

// let arr1 = [3, 5, 8];
// let obj1 = { ...arr1 };
// console.log(obj1);

// example

// function abc(a1, b2, c3) {
//   return a1 + b2 + c3;
// }
