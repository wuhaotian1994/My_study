var http=require('http');

var server=http.createServer();
server.on('request',function(){

});
server.listen('8611',function(){
    console.log("Server runing... port is 8611");
});