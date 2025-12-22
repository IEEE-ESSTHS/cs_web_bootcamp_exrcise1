// let - can be changed
let name = "John";

// const - cannot be changed
const PI = 3.14159;
const BIRTH_YEAR = 1998;

// var - old way (avoid using)
var oldVariable = "don't use this";

//numbers 
let age = 25;
let price = 19.99;
let negative = -10;

//String (Text)
let namestring = "Alice";
let greeting = 'Hello';
let message = `Welcome ${name}`; // Template literal

//Boolean (True/False)
let isStudent = true;
let hasLicense = false;

// Array (List)
let colors = ["red", "green", "blue", "pink"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true];

// Access items (starts at 0!)
console.log(colors[0]); // "red"
console.log(colors[2]); // "blue"

//Object (Key-Value Pairs)
let person = {
  name: "John",
  age: 30,
  isStudent: false
};

console.log(5===5); //true

// Access properties
console.log(person.name);  // "John"
console.log(person.age);   // 30


//Function Declaration
function greet() {
  console.log("Hello!");
}

// Call/invoke the function
greet(); // Output: Hello!


//Function with Parameters

function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice");  // Hello, Alice
greet("Bob");    // Hello, Bob

//Function with Return Value
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8

//Arrow Functions (Modern Way)

// Old way
function multiply(a, b) {
  return a * b;
}

// New way (arrow function)
const multiply_arrow = (a, b) => {
  return a * b;
};

// Even shorter (if one line)
const multiply_arrow_simplified = (a, b) => a * b;

//Seleting elements 
// Select by ID
let heading = document.getElementById('main-heading');

// Select by class (returns first match)
// let button = document.querySelector('.btn');

// Select all by class
let allButtons = document.querySelectorAll('.btn');

// Select by tag
let paragraphs = document.querySelectorAll('p');
let paragraphs_name = document.getElementsByName('p');//select element by their name 



//Event Listeners 
// Click event
// let button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//   console.log('Button was clicked!');
// });

// Input event (when typing)
// let input = document.getElementById('myInput');
// input.addEventListener('input', function(e) {
//   console.log('User typed:', e.target.value);
// });

// Mouse hover
// let box = document.getElementById('box');
// box.addEventListener('mouseenter', function() {
//   box.style.backgroundColor = 'yellow';
// });

// box.addEventListener('mouseleave', function() {
//   box.style.backgroundColor = 'white';
// });

//Event Object
let show = document.getElementById("show")
show.addEventListener('click', function(event) {
  console.log(event);           // The event object
  console.log(event.target);    // Element that was clicked
  console.log(event.type);      // Type of event ('click')
  console.log("clicked");      // Type of event ('click')

  
});