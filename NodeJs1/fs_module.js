// Importing the 'fs' (file system) module
const fs = require('fs');

// Step 1: Create and Write to a File
fs.writeFileSync('student.txt', 'Welcome to Node.js File System Module');
console.log('✅ File created and text written successfully!');

// Step 2: Read the File
const data = fs.readFileSync('student.txt', 'utf8');
console.log('📖 File Content:', data);

// Step 3: Delete the File
fs.unlinkSync('student.txt');
console.log('🗑️ File deleted successfully!');
