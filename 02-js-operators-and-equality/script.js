// ? Comparison Operators
// A comparison operator compares its operands and returns a logical value based on whether the comparison is true.
// let a = 5;
// let b = 10;

//  ? Equal to (==)
// console.log(a == b);
// ? Not equal to (!=)
// console.log(a != b);
// ? Strict equal to (===)
// console.log(a === b);
// ? Strict not equal to (! ==)
// console.log(a !== b);
// ? Greater than (>)
// console.log(a > b);
// ? Less than (<)
// console.log(a < b);
// ? Greater than or equal to (>=)
// console.log(a >= b);
// ? Less than or equal to (<=)
// console.log(a <= b);

// ! Strict Equality

// its compares values and data types prefer way to use this.

// The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

// console.log(20 === "20");

// ! Loose Equality

// it's doesn't compare data types

// When using double equals in JavaScript, it performs type coercion . Type coercion means that two values are compared only after attempting to convert them into a common type.

// console.log(20 == "20");

// ? Logical Operators
// There are four logical operators in JavaScript

//? || (OR)
// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

// console.log(true || false);

//? && (AND)
// In classical programming, AND returns true if both operands are truthy and false otherwise:
// console.log(true && true);
// multiple conditions
// console.log(true && true && true);

//?  ! (NOT)

// The operator accepts a single argument and does the following:
// Converts the operand to boolean type: true/false. returns the inverse value.
// console.log(!false);

// ?? (Nullish Coalescing).
