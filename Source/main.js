var http=require('http');

var server=http.createServer(function (req,res) {

        if(req.url=="/"){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write('<h1>This is Home Page</h1>')
            res.end();

        }
        else if(req.url=="/about"){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write('<h1>This is About Page</h1>')
            res.end();
        }

        else if(req.url=="/contact"){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write('<h1>This is Contact Page</h1>')
            res.end();
        }


});

server.listen(5050);
console.log("Server Run Success");