// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
  //     if (n === 0) return 1;
  //     else if (n < 0) return 0;

  //     if (n in memo) return memo[n];

  //     let sum = 0;

  //     if (n >= 1) {
  //         sum += climbStairs(n - 1, memo);
  //     }
  //     if (n >= 2) {
  //         sum += climbStairs(n - 2, memo);
  //     }

  //     memo[n] = sum;
  //     return memo[n];

  if (n === 0) return 1;

  const result = [1, 1];

  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result[n];
}