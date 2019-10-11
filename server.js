const http = require('http');
const input = require('./data.json');
const port = 3000;
const IPAdress = '127.0.0.1';

let server = http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000
      };

    const data = JSON.stringify(input)


    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (['GET', 'POST'].indexOf(req.method) > -1) {
        res.writeHead(200, headers);
        res.end(data);
        return;
    }

    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`);
});

server.listen(port, IPAdress);



