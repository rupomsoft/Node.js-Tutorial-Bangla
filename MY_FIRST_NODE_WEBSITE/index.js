var fs=require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {

  if(req.url=="/"){
     let data= fs.readFileSync('home.html','utf8');
     res.end(data);
  }
  else if(req.url=="/Contact"){
      let data= fs.readFileSync('contact.html','utf8');
      res.end(data);

  }
  else if(req.url=="/About"){

      let data= fs.readFileSync('about.html','utf8');
      res.end(data);
  }

  else if(req.url=="/Terms"){
      let data= fs.readFileSync('terms.html','utf8');
      res.end(data);
  }

});
server.listen(8080);
console.log("Server Run Success");
