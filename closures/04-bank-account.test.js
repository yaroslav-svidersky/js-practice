const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const { createBankAccount } = require("./04-bank-account.js");

describe("createBankAccount", () => {
  test("starts with the initial balance", () => {
    const account = createBankAccount(100);
    assert.equal(account.getBalance(), 100);
  });

  test("throws for a negative initial balance", () => {
    assert.throws(() => createBankAccount(-100), Error);
  });

  test("deposit increases the balance", () => {
    const account = createBankAccount(100);
    account.deposit(50);
    assert.equal(account.getBalance(), 150);
  });

  test("deposit throws for zero", () => {
    const account = createBankAccount(100);
    assert.throws(() => account.deposit(0), Error);
  });

  test("deposit throws for a string", () => {
    const account = createBankAccount(100);
    assert.throws(() => account.deposit("10"), Error);
  });

  test("deposit throws for a negative amount", () => {
    const account = createBankAccount(100);
    assert.throws(() => account.deposit(-50), Error);
  });

  test("withdraw decreases the balance when there is enough money", () => {
    const account = createBankAccount(100);
    assert.equal(account.withdraw(30), true);
    assert.equal(account.getBalance(), 70);
  });

  test("withdraw returns false when there is not enough money", () => {
    const account = createBankAccount(100);
    assert.equal(account.withdraw(500), false);
    assert.equal(account.getBalance(), 100);
  });

  test("withdraw allows taking the whole balance", () => {
    const account = createBankAccount(100);
    assert.equal(account.withdraw(100), true);
    assert.equal(account.getBalance(), 0);
  });

  test("withdraw returns false for zero", () => {
    const account = createBankAccount(100);
    assert.equal(account.withdraw(0), false);
  });

  test("withdraw throws for a string", () => {
    const account = createBankAccount(100);
    assert.throws(() => account.withdraw("10"), Error);
  });

  test("withdraw throws for a negative amount", () => {
    const account = createBankAccount(100);
    assert.throws(() => account.withdraw(-20), Error);
  });
});
