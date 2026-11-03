# Assignment 15: Promises and Async/Await

## Aim
To understand asynchronous programming using promises, rejection handling, async/await, and simulated user data.

## Theory

### 1. Asynchronous JavaScript
Asynchronous programming allows operations to be scheduled without requiring the entire program to wait synchronously for every operation to finish. It is commonly used for network requests, timers, and other delayed operations.

### 2. Promises
A Promise represents the eventual success or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.

### 3. Promise Resolution
A promise can be fulfilled with a value using `Promise.resolve()` or by resolving a promise inside its executor function. The `.then()` method handles fulfillment.

### 4. Promise Rejection
A promise can be rejected with a reason. Rejections can be handled using `.catch()` or an appropriate `try...catch` block when using `async/await`.

### 5. Async/Await
An `async` function always returns a promise. The `await` keyword pauses the function's execution until a promise settles, making asynchronous code easier to read.

### 6. Local User Data
A program can create and process a local array of user objects to practise asynchronous workflows without requiring an external API.

## Tasks
1. Demonstrate a fulfilled promise.
2. Demonstrate a rejected promise and handle the error.
3. Use `async/await` to process an asynchronous operation.
4. Work with local user data using the techniques specified in the program.

## Conclusion
This assignment introduces promise-based asynchronous programming, error handling, and the use of `async/await` in JavaScript.