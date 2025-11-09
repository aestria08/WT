"use strict";
// mathOperations.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        console.log("❌ Division by zero is not allowed!");
        return NaN;
    }
    return a / b;
}
