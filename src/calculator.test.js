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

it("should return sum of multiple numbers ", () => {
    expect(add("1,2,3,4,5,6")).toBe(21);
});

it("should return the sum of 1 + 2 + 3", () => {
    expect(add("1\n2,3")).toBe(6);
});

it("Should throw error on negative number", () => {
    expect(() => add("-1,-2")).toThrow('Negatives not allowed: -1,-2');
});

it("Should throw error on negative number", () => {
    expect(() => add("2,-4,3,-5")).toThrow('Negatives not allowed: -4,-5');
});
