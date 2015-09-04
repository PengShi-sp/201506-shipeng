var http=require('http');
var fs=require('fs');
var mime=require('mime');
http.createServer(function(req,res){
    var url=req.url;
    var urls=url.split('?');
    var pathName=urls[0];

    var queryObj={};
    var query=urls[1];
    if(query){
        var fields=query.split('&');
        //console.log(fields);//[ 'name=zfpx', 'age=3' ]
        fields.forEach(function(field){
            var vals=field.split('=');
            queryObj[vals[0]]=vals[1];
        });
    }
    if(pathName=='/'){
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
    }else if(pathName=='/favicon.ico'){
        res.end('404');
    } else if(pathName=='/params'){
        res.end(JSON.stringify(queryObj));
    }else if(pathName=='/ajax'){
        res.end("国庆");
    }
    else{
        var filename='.'+pathName;
        console.log(fs.exists);
        res.setHeader('Content-Type',mime.lookup(pathName));
        fs.readFile(filename,function(err,data){
            res.end(data);
        })
    }
}).listen(8080);
console.log('启动，监听8080');
