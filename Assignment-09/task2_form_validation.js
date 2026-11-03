// Name: Kavyansh Bhadri | Roll Number: 2510303259 | Assignment: 9, Task: 2
function validateForm(name) {
  const errors = [];

  if (name.trim() === "") {
    errors.push("Name is required");
  }

  return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
