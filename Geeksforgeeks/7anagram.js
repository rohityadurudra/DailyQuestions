
class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    areAnagrams(s1, s2) {
  // If lengths are not equal, they can't be anagrams
  if (s1.length !== s2.length) return false;

  // Create frequency map for first string
  const count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 97]++;
    count[s2.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) return false;
  }

  return true;
}
}
