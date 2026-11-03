// Name: Kavyansh Bhadri | Roll Number: 2510303259 | Assignment: 14, Task: 2
const timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");
