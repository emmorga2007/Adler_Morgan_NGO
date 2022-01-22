//const http = require('http');

import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;
//this is the address of the web app running on you localhost

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Node Express is easy!</h1>');
});
//this creates a server, writes a status code and writes some content. 


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//this is the minimum that you need to write a running node app