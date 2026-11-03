function createBankAccount(initialBalance) {
  if (!Number.isFinite(initialBalance) || initialBalance < 0) {
    throw new Error("Начальный баланс должен быть неотрицательным числом");
  }
  let money = initialBalance;

  return {
    deposit(amount) {
      if (Number.isFinite(amount) && amount >= 0) {
        money = money + amount;
      } else {
        throw new Error("Депозит должен быть неотрицательным числом");
      }
    },

    withdraw(amount) {
      if (!Number.isFinite(amount) || amount < 0) {
        throw new Error("Для изъятия должно быть неотрицательное число");
      } else if (amount <= money) {
        money = money - amount;
        return true;
      } else {
        return false;
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
console.log(account.withdraw(account.getBalance())); // true

try {
  account.deposit("10");
} catch (error) {
  console.log(error.message); // "Депозит должен быть неотрицательным числом"
}

try {
  account.deposit(-50);
} catch (error) {
  console.log(error.message); // "Депозит должен быть неотрицательным числом"
}

try {
  account.withdraw("10");
} catch (error) {
  console.log(error.message); // "Для изъятия должно быть неотрицательное число"
}

try {
  account.withdraw(-20);
} catch (error) {
  console.log(error.message); // "Для изъятия должно быть неотрицательное число"
}
