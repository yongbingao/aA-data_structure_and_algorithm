def change(amount, coins, memo = {})
  return 1 if amount == 0 
  return 0 if amount < 0 || coins.length == 0
  return memo[amount.to_s + coins.to_s] if memo[amount.to_s + coins.to_s]

  sum = 0
  i = coins.length - 1
  while(i >= 0)
    new_amount = amount - coins[i]
    next if 
    if new_amount >= coins[i]
      sum += change(new_amount, coins.take(i + 1), memo)
    else
      sum += change(new_amount, coins.take(i), memo)
    end
    i -= 1
  end

  memo[amount.to_s + coins.to_s] = sum
  return sum
end