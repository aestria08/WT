"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var student_1 = require("./student");
var s1 = new student_1.Student("Noah", 1, [90, 85, 88]);
var s2 = new student_1.Student("Aarav", 2, [75, 80, 70]);
console.log("🎓 Student Details:");
s1.displayInfo();
s2.displayInfo();
