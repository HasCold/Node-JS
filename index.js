const http = require("http");  // http module to make an API for server request and response
const data = require("./data");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "application\json"});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);