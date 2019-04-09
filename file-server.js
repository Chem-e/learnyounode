let http = require('http');
let fs = require('fs');

let fileServer = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});

    fs.createReadStream(process.argv[3]).pipe(res)
});

fileServer.listen(Number(process.argv[2]));