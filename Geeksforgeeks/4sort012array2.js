//my method

class Solution {
    sort012(arr) {
        const result = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                result.push(arr[i]);
            }
        }
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 1) {
                result.push(arr[j]);
            }
        }
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] === 2) {
                result.push(arr[k]);
            }
        }

        // Copy sorted values back to original array
        for (let i = 0; i < arr.length; i++) {
            arr[i] = result[i];
        }
    }
}
//But this is less efficient (uses extra space), 
// and not ideal for in-place sorting problems.
