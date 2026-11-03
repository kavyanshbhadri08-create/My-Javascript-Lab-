// Name: Kavyansh Bhadri | Roll Number: 2510303259 | Assignment: 11, Task: 2
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
