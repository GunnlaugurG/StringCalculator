// test.js

const add = require("./StringCalculator");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
    expect(add("6")).toBe(6);
});

it("should return sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
});

it("should return sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
});