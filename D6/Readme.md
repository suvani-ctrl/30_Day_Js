Filter Elements from Array
Introduction

This project implements a custom filter function in JavaScript that mimics the behavior of the built-in Array.filter method. The function takes an array and a filtering function as input, and it returns a new array containing elements that satisfy the filtering function.
Usage
Function Signature

/**
 * @param {number[]} arr - The array to filter.
 * @param {Function} fn - The filtering function.
 * @return {number[]} - A new array with filtered elements.
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

Parameters

    arr: An array of numbers to be filtered.
    fn: A function that determines whether an element should be included in the filtered array.
        It takes two arguments:
            arr[i]: The element.
            i: The index of the element.

Examples
Example 1: Filter Values Greater than 10

const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) { return n > 10; };

console.log(filter(arr, fn)); 
// Output: [20, 30]

Example 2: Filter Elements at Index 0

const arr = [1, 2, 3];
const fn = function firstIndex(n, i) { return i === 0; };

console.log(filter(arr, fn)); 
// Output: [1]

Example 3: Filter Non-Falsey Elements

const arr = [-2, -1, 0, 1, 2];
const fn = function plusOne(n) { return n + 1; };

console.log(filter(arr, fn)); 
// Output: [-2, 0, 1, 2]

Features

    Implements filter functionality without relying on built-in methods.
    Simple, efficient, and easy to customize.
    Handles edge cases, such as empty arrays or truthy/falsy filtering.

How it Works

    Iterate through each element of the array.
    Check if the element satisfies the condition in the provided filtering function (fn).
    Push the element into the filteredArr if the condition is truthy.
    Return the filteredArr after processing all elements.

Why Use This Implementation?

    Learn the mechanics of array filtering.
    Build a strong foundation for implementing higher-order functions.
    Understand how callback functions work with arrays.

License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you like. 😊
