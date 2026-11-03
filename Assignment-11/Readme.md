# Assignment 11: Scope and Closures

## Aim
To understand block scope, global scope, and closures in JavaScript.

## Theory

### 1. Global Scope
A variable declared in the global scope can be accessed from many parts of a program, subject to the rules of its declaration and execution environment.

### 2. Block Scope
Variables declared with `let` and `const` inside a block are accessible only within that block and its nested scopes.

### 3. Function Scope
Variables declared with `var` inside a function are scoped to that function rather than to an individual block.

### 4. Closures
A closure occurs when a function retains access to variables from its surrounding lexical scope, even after the outer function has finished executing.

Closures can be used to preserve private state, such as a counter.

## Tasks
1. Demonstrate block scope.
2. Create a counter using a closure.
3. Demonstrate global-scope behavior.

## Conclusion
This assignment explains how variable visibility and closures affect program behavior and state management.