// Comparison Operators
let x = 5;
console.log(x === 5)      // true (equal to)
x !== 3      // true (not equal to)
x > 3        // true (greater than)
x < 10       // true (less than)
x >= 5       // true (greater or equal)
x <= 5       // true (less or equal)

// AND (&&) - both must be true
let age = 25;
if (age >= 18 && age <= 65) {
  console.log('Working age');
}

// OR (||) - at least one must be true
let day = 'Saturday';
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Weekend!');
}

// NOT (!) - opposite
let isRaining = false;
if (!isRaining) {
  console.log('Go outside!');
}