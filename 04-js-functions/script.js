// ? Functions
// functions are block of code which perform a task.

// 1st way
// ? function declaration (defining a function)
/* A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly braces. */
// have access to "this keyword" so if we want to use this then we should use function declaration

// function square(number) {
//   return number * number;
// }

// 2nd way
// ? function expression

// Such a function can be anonymous; it does not have to have a name.

// const funExp = function (params) {};

// 3rd way

// ? Arrow functions
// An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous.

// const arrowFun = (params) => {};

// ! shorter version

// const arrowFun = (number) => number * number;
// const result = arrowFun(10);
// console.log(result);

// ? function call (invoking/executing a function)
// let result = square(20);
// console.log(result);

// example 1
// function abc(a, b) {
//   return a + b;
// }
// const sum = abc(2, 2);
// console.log(sum);

// example 2

// function person(name) {
//   console.log(`hi ${name}`);
// }
// person("Atif");
