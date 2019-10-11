var http=require('http');
var urlmodel=require('url');

var server=http.createServer();
server.on('request',function(req,res){
    const {pathname: url,query}=urlmodel.parse(req.url,true)
    var _data={
        name:'xgl',
        sex:'女',
        age:22
    }

    res.end(`${query.func}(${JSON.stringify(_data)})`)
});
server.listen('8611',function(){
    console.log("Server runing... port is 8611");
    
});