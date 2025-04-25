// Question no.38

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    backtrack(result, candidates, target);
    return result;
  };
  
  function backtrack(result, candidates, target, combination = [], offset = 0) {
    if (target < 0) {
      return;
    } else if (target === 0) {
      result.push(combination);
    } else {
      for (let i = offset; i < candidates.length; i++) {
        backtrack(result, candidates, target - candidates[i], [...combination, candidates[i]], i);
      }
    }
  }