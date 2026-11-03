# Assignment 10: Destructuring and Object Properties

## Aim
To understand object properties and use destructuring to extract values from arrays and objects.

## Theory

### 1. Object Properties
Objects contain properties that store values. Properties can be accessed using dot notation or bracket notation.

Example:

```javascript
const student = { name: "Aman", marks: 85 };
console.log(student.name);
```

### 2. Array Destructuring
Array destructuring extracts values from an array into variables according to their positions.

```javascript
const colors = ["red", "blue"];
const [first, second] = colors;
```

### 3. Object Destructuring
Object destructuring extracts properties into variables using matching property names. Aliases can be used to assign a property to a differently named variable.

```javascript
const { name, marks } = student;
```

### 4. Benefits
Destructuring makes code concise and improves readability when working with arrays and objects.

## Tasks
1. Access and examine object properties.
2. Demonstrate array destructuring.
3. Demonstrate object destructuring.

## Conclusion
This assignment develops skills in accessing structured data and extracting values efficiently.