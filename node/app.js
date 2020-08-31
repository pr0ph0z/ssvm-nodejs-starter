const { decodeJwt } = require('../pkg/ssvm_nodejs_starter_lib.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.headers.authorization) {
    const { authorization } = req.headers
    console.log(authorization)
    if (authorization.startsWith('Bearer ')) {
      const jwtToken = authorization.substring(8)
      res.end(decodeJwt(jwtToken))
    } else {
      res.end('Authorization header is not valid')
    }
  } else {
    res.end('No Authorization header is present')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
