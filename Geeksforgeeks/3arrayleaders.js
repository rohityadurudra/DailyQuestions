class Solution {
    // Function to find the leaders in the array.
    leaders(a) {
        // code here
        const leaders = [];
        let n = a.length;
        let maxfromright = a[n-1];
        for(let i=n-1; i >= 0; i-- ){
            if(a[i] >= maxfromright){
                maxfromright = a[i];
                leaders.push(maxfromright);
            }
        }
        leaders.reverse();
        return leaders;
    }
}

const solution = new Solution();
const arr = [16, 17, 4, 3, 5, 2];
console.log(solution.leaders(arr));

