//Problem:
//You're given an array of size n - 1, 
// containing distinct integers from 1 to n. Find the missing number.

//solution using sum formula
function findMissingNumber(arr, n) {
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;
}

// Example usage
const arr = [1, 2, 4, 6, 3, 7, 8];
const n = 8;
console.log("Missing number is:", findMissingNumber(arr, n));

//using Xor method

// function findMissingNumberXOR(arr, n) {
//     let xor1 = 0, xor2 = 0;

//     for (let i = 0; i < n - 1; i++) {
//         xor1 ^= arr[i];
//     }

//     for (let i = 1; i <= n; i++) {
//         xor2 ^= i;
//     }

//     return xor1 ^ xor2;
// }

// // Example usage
// const arrXOR = [1, 2, 4, 6, 3, 7, 8];
// const nXOR = 8;
// console.log("Missing number using XOR is:", findMissingNumberXOR(arrXOR, nXOR));

//functions used
//reduce, includes, has
