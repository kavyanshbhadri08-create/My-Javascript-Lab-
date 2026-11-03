// Name: Kavyansh Bhadri | Roll Number: 2510303259 | Assignment: 8, Task: 2
class Locker {
  constructor() {
    this.pin = 1234;
  }

  checkPin(number) {
    return number === this.pin;
  }
}

const locker = new Locker();
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
