# Assignment 14: Timers in JavaScript

## Aim
To understand delayed and repeated execution using JavaScript timer functions.

## Theory

### 1. setTimeout()
`setTimeout()` schedules a callback to execute after a specified delay, measured in milliseconds. The delay is a minimum scheduling delay, not a guarantee of exact execution time.

### 2. clearTimeout()
`clearTimeout()` cancels a pending timeout when called with its timer identifier before the callback executes.

### 3. setInterval()
`setInterval()` schedules a callback to run repeatedly at an approximate interval until it is cancelled.

### 4. Timer Identifiers
Timer functions return identifiers that can be stored in variables and used to cancel scheduled operations.

### 5. Practical Uses
Timers can be used for delayed messages, countdowns, repeated updates, and scheduled interface actions.

## Tasks
1. Display a message using `setTimeout()`.
2. Cancel a scheduled timeout using `clearTimeout()`.
3. Repeat an action using `setInterval()`.

## Conclusion
This assignment explains how JavaScript schedules delayed and recurring tasks and how to cancel them when necessary.