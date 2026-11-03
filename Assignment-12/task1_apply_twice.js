// Name: Kavyansh Bhadri | Roll Number: 2510303259 | Assignment: 12, Task: 1
function applyTwice(callback, value) {
  return callback(callback(value));
}

function addTen(number) {
  return number + 10;
}

console.log(applyTwice(addTen, 5));
