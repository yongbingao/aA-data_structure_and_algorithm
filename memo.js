var change = function (amount, coins) {
  const memo = new Array(amount + 1).fill(0);
  memo[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i < memo.length; i++) {
      memo[i] += memo[i - coin];
    }
  }

  console.log(memo);
  return memo[amount]
};

change(10, [1,2,5])