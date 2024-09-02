"use strict";

// 1. find maximum number in array

// const arr = [1, 5, 3, 9, 2, 11];
// using Math functions
// const max = Math.max(...arr);

/** using for loop */
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

/** using forEach */
// arr.forEach((val) => {
//   if (val > max) {
//     max = val;
//   }
// });

/** using sort */
// arr.sort((a, b) => a - b);
// const max = arr[arr.length - 1];

/** using while loop */
// let max = arr[0];
// let i = 1;

// while (i < arr.length) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   i++;
// }

// console.log(max);

// 2. Write a JavaScript function to check if a given string is a palindrome or not.

/** using reversing the string */
// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

/** using for loop */
// function isPalindrome(str) {
//   let length = str.length;

//   for (let left = 0, right = length - 1; left < right; left++, right--) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//   }

//   return true;
// }

/** using while loop */
// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

/** using recursion */
// function isPalindrome(str) {
//   if (str.length <= 1) return true;
//   if (str[0] !== str[str.length - 1]) return false;
//   return isPalindrome(str.slice(1, -1));
// }

/** using every */
// function isPalindrome(str) {
//   return str
//     .split("")
//     .every((char, index) => char === str[str.length - 1 - index]);
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

// 3. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// function getEvenNumbers(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }

// function getEvenNumbers(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// 4.  Write a JavaScript program to calculate the factorial of a given number.

// function factorial(n) {
//   if (n < 0) return -1; // Factorial for negative numbers is undefined
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// function factorial(n) {
//   if (n < 0) return -1; // Factorial for negative numbers is undefined
//   if (n === 0 || n === 1) return 1; // Base case
//   return n * factorial(n - 1);
// }

// 5.  Write a JavaScript function to check if a given number is prime.
// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }
// console.log(isPrime(7));

// 5. Write a JavaScript program to find the largest element in a nested array.

// using recursion
// const findMax = (arr) => {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       max = findMax(arr[i]);
//     } else {
//       max = Math.max(max, arr[i]);
//     }
//   }
//   return max;
// };

// const nestedArray = [1, [2, 3, [4]], 5, [6, [7]]];
// console.log(findMax(nestedArray));

// 6. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

// function fibonacciIterative(n) {
//   if (n <= 0) return [];
//   if (n === 1) return [0];
//   if (n === 2) return [0, 1];

//   const sequence = [0, 1];
//   for (let i = 2; i < n; i++) {
//     sequence.push(sequence[i - 1] + sequence[i - 2]);
//   }
//   return sequence;
// }
// console.log(fibonacciIterative(10));

/** recursive function */
// function fibonacciRecursive(n, sequence = [0, 1]) {
//   if (n <= 0) return [];
//   if (n === 1) return [0];
//   if (sequence.length >= n) return sequence;

//   const nextValue =
//     sequence[sequence.length - 1] + sequence[sequence.length - 2];
//   sequence.push(nextValue);
//   return fibonacciRecursive(n, sequence);
// }

// console.log(fibonacciRecursive(10));

// 7. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

// const titleCase = (str) => {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// console.log(titleCase("the quick brown fox"));

/********************************** ADVANCED */

// 1. Write a recursive function to calculate the factorial of a given number.
// const factorial = (num) => {
//   if (num < 0) return;
//   if (num === 0) return 1;
//   return num * factorial(num - 1);
// };

// function factorialIterative(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorialIterative(5));

// 2. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

// function mergeSortedArrays(arr1, arr2) {
//   // Initialize pointers for both arrays and a result array
//   let i = 0,
//     j = 0;
//   let mergedArray = [];

//   // Loop through both arrays and compare elements
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

// Append remaining elements from arr1, if any
//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   // Append remaining elements from arr2, if any
//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }

// // Example usage:
// const arr1 = [1, 3, 5, 8];
// const arr2 = [2, 4, 6, 7];
// console.log(mergeSortedArrays(arr1, arr2));

// 3. nested array => flat
// const arr = [1, [2, [3, 4], 5], 6, [7, 8]];

// const flat = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       newArr.push(arr[i]);
//     } else {
//       newArr.push(...flat(arr[i]));
//     }
//   }
//   return newArr;
// };

// const flatten = (arr) => {
//   return arr.reduce((acc, val) => {
//     return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val);
//   }, []);
// };

// console.log(flat(arr));

///////////////////////////////// Common questions

// 1. Implement a function to reverse a string without using the built-in reverse() method.
// function reverseString(str) {
//   let rStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rStr = rStr + str[i];
//   }
//   return rStr;
// }

// console.log(reverseString("hello!"));

// 2. Write a function that takes an array of integers as input and returns a new array with only the unique elements.
// Implement a function to remove duplicates from an array

// function getUniqueElements(arr) {
//   // Create a new Set from the array to automatically remove duplicates
//   const uniqueSet = new Set(arr);

//   // Convert the Set back to an array
//   return Array.from(uniqueSet);
// }

// // Example usage:
// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = getUniqueElements(array);
// console.log(uniqueArray);

// const uniq = (arr) => {
//   return arr.filter((value, index, arr) => arr.indexOf(value) === index);
// };

// console.log(uniq([1, 2, 2, 3, 4, 4, 5]));

// 3. Given a string, write a function to count the occurrences of each character in the string.
// function countCharacterOccurrences(str) {
//   const count = {};

//   for (const char of str) {
//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//   }

//   return count;
// }

// const string = "hello world";
// const occurrences = countCharacterOccurrences(string);
// console.log(occurrences);

// function generatePattern() {
//   let number = 0;
//   for (let i = 1; i <= 4; i++) {
//     let line = "";
//     for (let j = 0; j < i; j++) {
//       line += number++;
//     }
//     console.log(line);
//   }
// }

// generatePattern();

// 4.  Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.

// function largestDifference(arr) {
//   if (arr.length < 2) {
//     throw new Error("Array must contain at least two elements");
//   }

//   // Find the maximum and minimum values in the array
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);

//   // Return the difference between the maximum and minimum values
//   return max - min;
// }

// function largestDifference(arr) {
//   if (arr.length < 2) {
//     throw new Error("Array must contain at least two elements");
//   }

//   let min = arr[0];
//   let max = arr[0];

//   for (const num of arr) {
//     if (num < min) {
//       min = num;
//     }
//     if (num > max) {
//       max = num;
//     }
//   }

//   return max - min;
// }

// const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// const difference = largestDifference(array);
// console.log(difference);

// function sortStrings(arr) {
//   return arr.slice().sort();
// }

// 5. Implement a function that merges two arrays into a single array, alternating elements from each array.
// function mergeAlternating(arr1, arr2) {
//   const mergedArray = [];
//   const maxLength = Math.max(arr1.length, arr2.length);

//   for (let i = 0; i < maxLength; i++) {
//     if (i < arr1.length) {
//       mergedArray.push(arr1[i]);
//     }
//     if (i < arr2.length) {
//       mergedArray.push(arr2[i]);
//     }
//   }

//   return mergedArray;
// }

// const array1 = [1, 2, 3];
// const array2 = ["a", "b", "c", "d"];
// const mergedArray = mergeAlternating(array1, array2);
// console.log(mergedArray); // Output: [1, "a", 2, "b", 3, "c", "d"]
