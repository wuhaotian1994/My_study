var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(../006tank/tank.html);
}).listen(8611);
console.log("Server runing... port is 8611");