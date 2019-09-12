// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3.
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
function stepper(nums) {
  // function step(idx, memo){
  //     if (idx + nums[idx] >= nums.length - 1) return true;
  //     if (idx in memo) return memo[idx];

  //     for(let i = 1; i <= nums[idx]; i++){
  //         if (step(idx + i, memo)) return true;
  //     }
  //     memo[idx] = false;
  //     return false;
  // }

  // const memo = {};
  // for(let i = 1; i <= nums[0]; i++){
  //     if (step(i, memo)) return true;
  // }

  // return false;
  let i = 0;
  let idx = 1;

  while (i <= idx) {
    if (i + nums[i] >= nums.length - 1) return true;
    if (idx < i + nums[i]) idx = i + nums[i];

    i++;
  }

  return false;
}

// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6
function maxNonAdjacentSum(nums) {
  // function helper(idx, memo){
  //     if (idx > nums.length - 1) return 0;
  //     if (idx in memo) return memo[idx];

  //     let threeMaxSum = 0;
  //     for(let i = 2; i <= 3; i++){
  //         const sum = nums[idx] + helper(idx + i, memo);
  //         if (sum > threeMaxSum) threeMaxSum = sum;
  //     }

  //     memo[idx] = threeMaxSum;
  //     return memo[idx];
  // }

  // const memo = {};
  // let twoMaxSum = 0;

  // for (let i = 0; i < 2; i++){
  //     const sum = helper(i, memo);
  //     if (sum > twoMaxSum) twoMaxSum = sum;
  // }

  // return twoMaxSum;

  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let maxSum = [nums[0], nums[1]];

  for (let i = 2; i < nums.length; i++) {
    if (i === 2) maxSum.push(nums[i] + maxSum[i - 2]);
    else if (maxSum[i - 2] > maxSum[i - 3]) {
      maxSum.push(nums[i] + maxSum[i - 2]);
    } else {
      maxSum.push(nums[i] + maxSum[i - 3]);
    }
  }

  return Math.max(maxSum[nums.length - 1], maxSum[nums.length - 2]);
}

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
//   if (amount === 0) return 0;
//   if (amount in memo) return memo[amount];
//   const result = [Infinity];

//   for (let i = 0; i < coins.length; i++) {
//     if (amount === coins[i]) return 1;
//     else if (amount > coins[i]) {
//       result.push(1 + minChange(coins, amount - coins[i], memo));
//     }
//   }

//   memo[amount] = Math.min(...result);
//   return memo[amount];
    
    if (amount === 0) return 0;
    const table = [0];
    let current = 1;

    while (table.length <= amount){
        const numOfCoins = [];

        for(let i = 0; i < coins.length; i++){
            if (current === coins[i]) numOfCoins.push(1);
            if (current > coins[i]){
                const newAmount = current - coins[i];

                if (table[newAmount]) numOfCoins.push(1 + table[newAmount])
            }
        }

        if (numOfCoins.length === 0) table.push(0);
        else table.push(Math.min(...numOfCoins));
        current++;
    }

    return table[amount];
}

module.exports = {
  stepper,
  maxNonAdjacentSum,
  minChange
};
