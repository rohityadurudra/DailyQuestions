// Question no.36

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = new Array(9).fill().map(() => new Set());
    const columns = new Array(9).fill().map(() => new Set());
    const boxes = new Array(9).fill().map(() => new Set());
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const value = board[i][j];
        const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        const options = [rows[i], columns[j], boxes[k]];
  
        if (options.some(option => option.has(value))) return false;
        if (value !== '.') options.forEach(option => option.add(value));
      }
    }
  
    return true;
  };