function createBankAccount(initialBalance) {
  let money = initialBalance;
  return {
    deposit(amount) {
      money = money + amount;
    },

    withdraw(amount) {
      if (money < amount) {
        return false;
      } else {
        money = money - amount;
        return true;
      }
    },

    getBalance() {
      return money;
    },
  };
}

const account = createBankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
console.log(account.withdraw(30)); // true
console.log(account.withdraw(500)); // false
console.log(account.getBalance()); // 120
