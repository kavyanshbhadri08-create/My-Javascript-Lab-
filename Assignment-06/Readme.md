# Assignment 06: JSON in JavaScript

## Aim
To understand JSON and convert data between JSON strings and JavaScript objects.

## Theory

### 1. JSON
JSON stands for JavaScript Object Notation. It is a text-based data format commonly used to exchange information between applications.

JSON supports strings, numbers, booleans, null, arrays, and objects.

### 2. JSON.stringify()
`JSON.stringify()` converts a JavaScript value, such as an object, into a JSON string.

### 3. JSON.parse()
`JSON.parse()` converts valid JSON text into a JavaScript value.

Example:

```javascript
const jsonText = '{"city":"Pune","pin":411001}';
const locationData = JSON.parse(jsonText);

console.log(locationData.city);
```

### 4. Error Handling
Invalid JSON causes `JSON.parse()` to throw a `SyntaxError`. A `try...catch` block can handle this error safely.

## Tasks
1. Convert a JavaScript object into a JSON string.
2. Parse JSON text into a JavaScript object.
3. Handle invalid JSON input.

## Conclusion
This assignment demonstrates JSON serialization, parsing, and basic error handling.