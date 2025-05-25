
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const prefixes = strs[0].split('').map((_, i) => strs[0].slice(0, i + 1));

  for (let i = strs.length - 1; i > -1; i--) {
    for (let j = prefixes.length - 1; j > -1; j--) {
      if (strs[i].substr(0, j + 1) !== prefixes[j]) {
        prefixes.pop();
      }
    }
  }

  return prefixes.pop() || '';
};
