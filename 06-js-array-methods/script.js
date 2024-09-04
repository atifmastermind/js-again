// ? Array methods
// ? to string
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// let a = [1, 2, 3, 4, 5];
// let b = a.toString();
// console.log(b);

// ? Join

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

// let a = [1, 2, 3, 4, 5];
// let b = a.join(" number ");
// console.log(b);

// ? Pop
// The pop() method removes the last element from an array:
// ! this method change the same array its not creating a new array.

// let a = [1, 2, 3, 4, 5];
// pop from array
// a.pop();
// we can also print the pop value
// let b = a.pop();
// console.log(b);

// ? Push
// The push() method adds a new element to an array (at the end):

// let a = [1, 2, 3, 4, 5];
// a.push(6);
// console.log(a);

// ? shift
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

// let a = [1, 2, 3, 4, 5];
// a.shift();
// console.log(a);

// ? unshift
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// let a = [1, 2, 3, 4, 5];
// a.unshift(0);
// console.log(a);

// ? delete
// its not a method its a operator
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.
// ! The element was removed, but the array length still the same,

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// delete a[0];
// console.log(a.length);

// ? concat
// The concat() method creates a new array by merging (concatenating) existing arrays:
// ! The concat() method does not change the existing arrays. It always returns a new array.

// let boys = ["Muhammad Atif", "Hamza", "Aliyan"];
// let girls = ["rimsha, Aliya, humna"];
// let mixGender = boys.concat(girls);
// console.log(mixGender);

// ? sort
// The sort() method sorts an array alphabetically:
// ! this method change the same array its not creating a new array.
// ? ascending
// let a = [1, 2, 4, 3, 5, 6, 8, 7, 9];
// a.sort();
// console.log(a);
//? descending
// let compare = (a, b) => {
//   return b - a;
// };

// let num = [1, 2, 4, 3, 5, 6, 8, 7, 9];
// num.sort(compare);
// console.log(num);

//? reverse

// let num = [1, 2, 4, 3, 5, 6, 8, 7, 9];
// num.reverse();
// console.log(num);

// ? splice
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

// let num = [1, 2, 4, 3, 5, 6, 8, 7, 9];
// num.splice(1, 3, 10, 20, 30);
// console.log(num);

// ? slice
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

// let num = [1, 2, 4, 3, 5, 6, 8, 7, 9];
// if you give one value  in parameter then its start from that index till end of the array
// let newarray = num.slice(3);
// if you give two value  in parameter then its start from that index till end of the array
// console.log(newarray);
