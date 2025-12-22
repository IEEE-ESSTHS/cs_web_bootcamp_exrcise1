// Basic For Loop
// Print numbers 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Loop Through Array
let fruits = ['apple', 'banana', 'orange',0 , true ];

for (let i = 0; i < fruits.length; i++) { /**fruits.length = 5 */
  console.log(fruits[i]);
}
// Output: apple, banana, orange


//Real Example - Sum of Numbers
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log('Total:', sum); // 15


//Loops - While Loop
// /While Loop
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
// Output: 0, 1, 2, 3, 4

// /Do-While Loop
let num = 0;

do {
  console.log(num);
  num++;
} while (num < 3);
// Output: 0, 1, 2

// Runs at least once, even if condition is false
let x = 10;
do {
  console.log('Runs once');
  x-=1
} while (x < 5);

//Break and Continue
// Break - exit loop early
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Continue - skip current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0, 1, 3, 4


/******Old Way */
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2);
}

/***********New Way (forEach) */
let nums = [1, 2, 3];
nums.forEach(num => {
  console.log(num * 2);
});



/**For Each */
/*Basic forEach*/
let fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function(fruit) {
  console.log(fruit);
});

// With arrow function (shorter)
fruits.forEach(fruit => {
  console.log(fruit);
});

/**forEach with Index */
let colors = ['red', 'green', 'blue'];
// colors[index]
colors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});
// Output:
// 0: red
// 1: green
// 2: blue

/**map() */
/**Basic map */
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]


/** Transform Objects*/
let users = [
  { name: 'Ali,ce', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
// users[0] =>{ name: 'Alice', age: 25 }
// Get just the names
let names = users.map(p => p.name.split(','));
console.log(names); // ['Alice', 'Bob', 'Charlie']

// Add new property
let usersWithId = users.map((user, index) => {
  return { ...user, id: index + 1 };
});
// { name: 'Ali,ce', age: 25 } => { name: 'Ali,ce', age: 25, id: 0+1 }
//  { name: 'Bob', age: 30 , id: 1+1 }
/** filter() */

/**Basic */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get only even numbers
let evens = numbers.filter((num,index) => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// Get numbers greater than 5
let bigNums = numbers.filter(num => num > 5);
console.log(bigNums); // [6, 7, 8, 9, 10]



/** Filter Objects*/
let products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 },
  { name: 'Watch', price: 200 }
];

// Get products under $400
let affordable = products.filter(product => product.price < 400);
console.log(affordable);
// [{ name: 'Tablet', price: 300 }, { name: 'Watch', price: 200 }]

/** Filter with Conditions*/
let users = [
  { name: 'Alice', age: 17, active: true },
  { name: 'Bob', age: 25, active: true },
  { name: 'Charlie', age: 30, active: false }
];

let activeAdults = users.filter(user => user.age >= 18 && user.active);
console.log(activeAdults); // [{ name: 'Bob', ... }]

/**Chaining  */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers, then double them
let result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);

console.log(result); // [4, 8, 12, 16, 20]


