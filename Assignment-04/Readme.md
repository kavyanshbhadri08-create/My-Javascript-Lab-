# Assignment 04: Functions in JavaScript

## Aim
To understand functions, arrow functions, and default parameters.

## Theory

### 1. Functions
A function is a reusable block of code designed to perform a specific task. Functions help organize programs and reduce repetition.

A function can accept parameters and return a value.

### 2. Arrow Functions
Arrow functions provide a shorter syntax for writing functions.

Example:

```javascript
const square = n => n * n;
```

Arrow functions differ from regular functions in how they handle `this`.

### 3. Default Parameters
Default parameters provide values for function parameters when arguments are omitted or explicitly passed as `undefined`.

Example:

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
```

## Tasks
1. Create a greeting function.
2. Calculate a square using an arrow function.
3. Demonstrate default function parameters.

## Conclusion
This assignment explains reusable functions and different ways to define and call functions in JavaScript.