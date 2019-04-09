	
let net = require('net');
 
function addZero(i) {
    return (i < 10 ? '0' : '') + i;
}
 
function currentDate() {
    let date = new Date();
    return date.getFullYear() + '-'
        + addZero(date.getMonth() + 1) + '-'
        + addZero(date.getDate()) + ' '
        + addZero(date.getHours()) + ':'
        + addZero(date.getMinutes());
}
 
let server = net.createServer(function (socket) {
    socket.end(currentDate() + '\n');
});
 
server.listen(Number(process.argv[2]));