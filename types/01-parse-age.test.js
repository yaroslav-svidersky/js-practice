const { test } = require("node:test");
const assert = require("node:assert/strict");
const { parseAge } = require("./01-parse-age.js");

test("returns a number for a valid age", () => {
  assert.equal(parseAge("42"), 42);
});

test("trims spaces around the number and returns a number", () => {
  assert.equal(parseAge(" 42 "), 42);
});

test("returns 0 for the lower boundary", () => {
  assert.equal(parseAge("0"), 0);
});

test("returns 150 for the upper boundary", () => {
  assert.equal(parseAge("150"), 150);
});

test("returns null for an empty string", () => {
  assert.equal(parseAge(""), null);
});

test("returns null for an empty string with trims spaces", () => {
  assert.equal(parseAge("   "), null);
});

test("returns null for an invalid string", () => {
  assert.equal(parseAge("42abc"), null);
});

test("returns null for a negative number", () => {
  assert.equal(parseAge("-5"), null);
});

test("returns null for a non-integer number", () => {
  assert.equal(parseAge("42.5"), null);
});

test("returns null for null", () => {
  assert.equal(parseAge(null), null);
});

test("returns null for undefined", () => {
  assert.equal(parseAge(undefined), null);
});

test("returns null for a number above 150", () => {
  assert.equal(parseAge("151"), null);
});

test("returns null for a boolean", () => {
  assert.equal(parseAge(true), null);
});
