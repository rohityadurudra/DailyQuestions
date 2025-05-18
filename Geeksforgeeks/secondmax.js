 const getSecondLargest = (arr) => {
        // code here
        let max = 0;
        let secondmax = 0;
        let index;
        for(let i = 0; i<arr.length;i++){
           if(max < arr[i]){
            max = arr[i];
            index = i;
           }  
        }
        const arr2 = removeatpos(arr,index);

        for(let i = 0; i<arr2.length;i++){
           if(secondmax < arr2[i]){
            secondmax = arr2[i];
           }  
        }
        if(secondmax===max){
            return -1;
        }
        return secondmax;
    }       
const removeatpos = (arr,index) => {
    for(let i = index; i < arr.length  ;i++){
        
        arr[i] = arr[i+1];
    }
    arr.length = arr.length -1
    return arr;
    
}      

const arr = [10,10,10];

const num = getSecondLargest(arr);
console.log(num);


//other method
/*class Solution {
    getSecondLargest(arr) {
        // Handle arrays with less than 2 elements
        if (arr.length < 2) return -1;

        let max = -Infinity;
        let secondMax = -Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                secondMax = max;
                max = arr[i];
            } else if (arr[i] > secondMax && arr[i] < max) {
                secondMax = arr[i];
            }
        }

        return (secondMax === -Infinity) ? -1 : secondMax;
    }
}
 */

//improved code
/*class Solution {
    getSecondLargest(arr) {
        if (arr.length < 2) return -1;

        // Step 1: Find the index of the first occurrence of the max value
        let max = -Infinity;
        let index = -1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                index = i;
            }
        }

        // Step 2: Remove only the first occurrence of the max
        const arr2 = this.removeatpos([...arr], index); // use a copy to avoid mutating original

        // Step 3: Find the next max (second largest), skipping values equal to the original max
        let secondMax = -Infinity;
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] !== max && arr2[i] > secondMax) {
                secondMax = arr2[i];
            }
        }

        return secondMax === -Infinity ? -1 : secondMax;
    }

    removeatpos(arr, index) {
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length = arr.length - 1;
        return arr;
    }
}
 */

