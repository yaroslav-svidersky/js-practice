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

module.exports = { createBankAccount };
