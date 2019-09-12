// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
  // if (grid.length === 0) return;

  // const row = grid.length;
  // const col = grid[0].length;
  // const memo = {};

  // function travel(coord, memo){
  //   const [i, j] = coord;
  //   if (i === row - 1 && j === col - 1) return grid[i][j];
  //   const key = i * col + j;
  //   if (memo[key]) return memo[key];

  //   let min;

  //   if (j + 1 >= col) min = travel([i + 1, j], memo);
  //   else if (i + 1 >= row) min = travel([i, j + 1], memo);
  //   else min = Math.min(travel([i + 1, j], memo), travel([i, j + 1], memo))

  //   memo[key] = grid[i][j] + min;
  //   return memo[key];
  // }

  // return travel([0,0], memo);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) continue;
      else if (i === 0) grid[i][j] = grid[i][j] + grid[i][j - 1];
      else if (j === 0) grid[i][j] = grid[i][j] + grid[i - 1][j];
      else grid[i][j] = grid[i][j] + Math.min(grid[i][j - 1], grid[i - 1][j]);
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}