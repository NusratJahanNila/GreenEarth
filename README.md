1) What is the difference between var, let, and const?

Answer:

var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
const: Declares block-scoped variables that cannot be reassigned after their initial assignment.


2) What is the difference between map(), forEach(), and filter()?

Answer:

The map() function receives a function as a parameter and will apply the code on each element and returns an entirely new array. It will not change the original array.
The forEach() function receives a function as an argument and it applies the same code to every element. It will not return anything, it just applies the conditions to every element. It will not change the original array.
The filter() method receives function as a parameter. It runs the function for each element in the array. It will return the new array which satisfies the condition applied. It will not change the original array.

3) What are arrow functions in ES6?

Answer:

Arrow functions are a concise alternative syntax for writing function expressions in JavaScript ES6, primarily used for shorter functions and callbacks.
Example:
    let myFunction = (a, b) => a * b;

4) How does destructuring assignment work in ES6?

Answer:

Destructuring in ES6 allows you to extract values from arrays or objects and assign them to variables in a concise and readable way. It simplifies code, making it shorter and easier to understand.


5) Explain template literals in ES6. How are they different from string concatenation?

Answer:

Template literals (`string`) allow embedding expressions directly using `${expression}` syntax and preserve line breaks automatically. 
Unlike traditional string concatenation which requires `+` operators and manual newlines (`\n`), template literals are more readable, especially for multi-line strings and dynamic content.