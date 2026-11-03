function createBankAccount(initialBalance) {
  if (!Number.isFinite(initialBalance) || initialBalance < 0) {
    throw new Error("Начальный баланс должен быть положительным числом");
  }
  let money = initialBalance;

  return {
    deposit(amount) {
      if (Number.isFinite(amount) && amount > 0) {
        money = money + amount;
      } else {
        throw new Error("Депозит должен быть положительным числом больше нуля");
      }
    },

    withdraw(amount) {
      if (!Number.isFinite(amount) || amount < 0) {
        throw new Error("Для изъятия должно быть положительное число");
      } else if (amount <= money && amount !== 0) {
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
console.log(account.withdraw(0)); // false
console.log(account.getBalance()); // 120
console.log(account.withdraw(account.getBalance())); // true

try {
  const account1 = createBankAccount(-100);
} catch (error) {
  console.log(error.message); // "Начальный баланс должен быть положительным числом"
}

try {
  account.deposit(0);
} catch (error) {
  console.log(error.message); // "Депозит должен быть положительным числом больше нуля"
}

try {
  account.deposit("10");
} catch (error) {
  console.log(error.message); // "Депозит должен быть положительным числом больше нуля"
}

try {
  account.deposit(-50);
} catch (error) {
  console.log(error.message); // "Депозит должен быть положительным числом больше нуля"
}

try {
  account.withdraw("10");
} catch (error) {
  console.log(error.message); // "Для изъятия должно быть положительное число"
}

try {
  account.withdraw(-20);
} catch (error) {
  console.log(error.message); // "Для изъятия должно быть положительное число"
}
