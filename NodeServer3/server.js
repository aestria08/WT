// Import the built-in http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Write the response message
  res.end('Welcome to My First Node.js Web Server!');
});

// Server will listen on port 3000
server.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});
