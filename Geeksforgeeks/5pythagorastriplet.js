/**
 * @param {number[]} arr
 * @return {boolean}
 */

class Solution {
    hasPythagoreanTriplet(arr) {
    const n = arr.length;
    const squared = arr.map(x => x * x).sort((a, b) => a - b);

   
    for (let c = n - 1; c >= 2; c--) {
        let a = 0;
        let b = c - 1;

    while (a < b) {
      const sum = squared[a] + squared[b];
      if (sum === squared[c]) {
        return true;
      } else if (sum < squared[c]) {
        a++;
      } else {
        b--;
      }
    }
  }

  return false; // No triplet found
}

}

/*function hasPythagoreanTriplet(arr) {
  const n = arr.length;

  // Square all values and store in a new array
  const squares = arr.map(x => x * x);

  // Use a set to store all squares for O(1) lookup
  const squareSet = new Set(squares);

  // Check for every pair if their sum exists in the set
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = squares[i] + squares[j];
      if (squareSet.has(sum)) {
        return true;
      }
    }
  }

  return false;
}
 */