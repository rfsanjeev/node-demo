const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (request, response) {
   console.log(`Request received ${new Date().getTime()}`);
   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end('Hello World\n');
});

server.listen(port, hostname, () => {
   console.log(`Server is running at http://${hostname}:${port}`);
});

