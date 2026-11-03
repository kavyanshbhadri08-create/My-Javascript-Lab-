// Name: Kavyansh Bhadri | Roll Number: 2510303259 | Assignment: 7, Task: 3
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

Student.prototype.result = function () {
  return this.marks >= 40 ? "Pass" : "Fail";
};

const student = new Student("Asha", 88);
console.log(student.result());
