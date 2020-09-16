var fs=require('fs');
var http=require('http');


var server=http.createServer(function (req,res) {

    if(req.url=="/"){

      let error=  fs.unlinkSync('Home.html')

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Delete Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Delete Success");
                res.end();
            }

    }




});
server.listen(5050);
console.log("Server Run Success");
