"use strict";

/**
 * 1. Count down till number 1
 */

const countDown = (n) => {
  if (n < 1) {
    return;
  } else {
    console.log(n);
    countDown(n - 1);
  }
};

// countDown(10);

/**
 * 2. Find a factorial number
 *  factorial(5) = 5*4*3*2*1
 */

const factorial = (n) => {
  if (n < 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

// console.log(factorial(5))

/**
 * 3. flat the nested array
 *  [0, 1, [2, [3, [4, 5]]]]
 */

const flatArray = (arr) => {
  let flattenedArray = [];
  if (arr.length < 0) return;
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattenedArray.push(arr[i]);
    } else {
      flattenedArray = flattenedArray.concat(flatArray(arr[i]));
      // flattenedArray.push(...flatArray(arr[i]));
    }
  }
  return flattenedArray;
};

// console.log(flatArray([0, 1, [2, [3, [4, 5]]]]));

/**
 * 4. fibonacci sequence
 * 0 1 1 2 3 5 8 13 21 34 55 89 144 233
 */

const fibonacci = (n) => {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};

// other way recursive way
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Generate the first 'n' Fibonacci numbers
function generateFibonacci(n) {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacciRecursive(i));
  }
  return sequence;
}

// console.log(generateFibonacci(8));

/**
 * 5. Sum of an array
 * [1,2,3,4,5,6]
 */

function sumArray(arr, n) {
  // Base case: if the array is empty or all elements have been summed
  if (n <= 0) {
    return 0;
  }
  // Recursive case: last element + sum of the remaining elements
  return arr[n - 1] + sumArray(arr, n - 1);
}

/**
 * 6. reverse a string
 */

const reverseString = (str) => {
  if (str === "") return "";

  return str[str.length - 1] + reverseString(str.slice(0, -1));
};

// console.log(reverseString("hello"));

/**
 * 7. calculate power x^n
 * x^4 = x*x*x*x
 */

const power = (x, n) => {
  if (n === 0) return 1;
  return x * power(x, n - 1);
};

// console.log(power(3, 3));

/**
 * 8. Checks if a string is a palindrome.
 */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar"));
