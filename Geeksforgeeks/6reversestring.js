/**
 * @param {string} s
 * @return {string}
 */

class Solution {

    reverseString(s) {
        // code here
        const result = s.split("").reverse().join("");
        return result;
    }
}