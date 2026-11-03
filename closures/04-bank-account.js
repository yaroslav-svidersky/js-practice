function createBankAccount(initialBalance) {
  let money = 0;
  if (Number.isFinite(initialBalance) && initialBalance >= 0) {
    money = initialBalance;
  } else {
    throw new Error("Начальный баланс должен быть неотрицательным числом");
  }

  return {
    deposit(amount) {
      if (Number.isFinite(amount) && amount >= 0) {
        money = money + amount;
      } else {
        throw new Error("Депозит должен быть неотрицательным числом");
      }
    },

    withdraw(amount) {
      if (amount > 0 && amount <= money) {
        money = money - amount;
        return true;
      }
      return false;
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
console.log(account.withdraw(-20)); // false
console.log(account.withdraw(account.getBalance())); // true
console.log(account.deposit("10")); // Error
console.log(account.deposit(-50)); // Error
