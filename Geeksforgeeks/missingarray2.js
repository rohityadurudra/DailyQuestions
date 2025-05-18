// find the missing number by manually checking each value from 1 to n, 
// and see which one is not present in the array — without using the sum formula.

// Approach: Check every number from 1 to n
// Loop from 1 to n

// For each number, check if it's in the array

// If not, that’s the missing number

function findMissingNumber(arr, n) {
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) {
            return i;
        }
    }
    return -1; // just in case no number is missing
}
const arr = [1, 2, 4, 6, 3, 7, 8];
const n = 8;
console.log("Missing number is:", findMissingNumber(arr, n));

// arr.includes(i) checks if value i exists in the array.

// This method is simple and clear, but not the fastest — because .includes() is O(n) for each lookup.

// So overall time complexity is O(n²) in worst case.


//using set 
// If you want it to be faster, convert the array into a Set (for O(1) lookup):
function findMissingNumber(arr, n) {
    const set = new Set(arr);
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return -1;
}
