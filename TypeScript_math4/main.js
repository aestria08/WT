"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
var mathOperations_1 = require("./mathOperations");
var num1 = 20;
var num2 = 5;
console.log("🧮 Math Operations:");
console.log("Addition: ".concat((0, mathOperations_1.add)(num1, num2)));
console.log("Subtraction: ".concat((0, mathOperations_1.subtract)(num1, num2)));
console.log("Multiplication: ".concat((0, mathOperations_1.multiply)(num1, num2)));
console.log("Division: ".concat((0, mathOperations_1.divide)(num1, num2)));
