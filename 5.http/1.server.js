var http=require('http');
http.createServer(function(req,res){
    res.end('hello');

}).listen(8080);
console.log("启动并监听8080");