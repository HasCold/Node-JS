const http = require("http");

// What HTTP core module did (Interview Question)
// HTTP module handle the server request and repsonse in the Node.js

http.createServer((req, res) => {
   res.write("<h1>Hi, This is Hasan</h1>");
   res.end();
}).listen(4500);