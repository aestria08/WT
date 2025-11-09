// main.ts
import { Student } from "./student";

const s1 = new Student("Noah", 1, [90, 85, 88]);
const s2 = new Student("Aarav", 2, [75, 80, 70]);

console.log("🎓 Student Details:");
s1.displayInfo();
s2.displayInfo();
