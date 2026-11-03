// Name: Kavyansh Bhadri | Roll Number: 2510303259 | Assignment: 14, Task: 3
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Tick ${count}`);

  if (count === 3) {
    clearInterval(intervalId);
  }
}, 200);
