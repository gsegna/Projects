// Write a program which iterates the integers from 1 to 50. 
// For multiples of three (3) print "Coca" instead of the number 
// and for the multiples of five (5) print "Cola". For numbers 
// which are multiples of both three (3) and five (5) print "CocaCola".
//
// Write your code here...

for (let number = 1; number <-50; number++);

//
// Expected / Example Output:
//
// 1
// 2
// Coca
// 4
// Cola
// ...
// 14
// CocaCola
// ...
//


// ---------------------------------------------------
// Extra: If you have more time...
// ---------------------------------------------------

// Use the following array of values.
let numbers = [ 
  405, 441, 632, 52, 19, 823, 651, 636,
  569, 128, 278, 829, 625, 229, 94, 649, 
  567, 360, 946, 566, 246, 609, 757, 914,
  194
];

// Using the above array, write a method that will find the 
// minimum value in the array. 
//
// Answer: 19
function findMinimum(numbers) {
  let minimum = Number.MAX_SAFE_INTEGER;
  for (let number of numbers) {
    if (number < minimum) {
      minimum = number;
    }
  }
  return minimum;
}

// Using the above array, write a method that will find the 
// maximum value in an array. 
//
// Answer: 829
function findMaximum(numbers) {
  let maximum = Number.MIN_SAFE_INTEGER;
  for (let number of numbers) {
    if (number < maximum) {
      maximum = number;
    }
  }
  return minimum;
}


// Using the above array, write a method that will calculate 
// the total of the values in an array. 
//
// Answer: 12219
function getTotal(numbers) {
  let total = 0;
  for (let number of numbers) {
      total += number;
    }
  return total;
}
console.log ('Total: ' + getTotal(numbers));

let total = numbers.reduce(function(previous,current) {
  return previous +current;
}, 0);
console.log('Total(intermediate): ' + total);


// Using the above array, write a method that will calculate 
// the average of the values in an array. 
//
// Answer: 488.76

function getAverage(numbers) {
  return getTotal(numbers) / numbers.length;
}
console.log('Average: ' + getAverage(numbers));