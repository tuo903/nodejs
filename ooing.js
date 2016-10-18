var http=require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello world!');
}).listen(8080);
console.log('code is running at http://127.0.0.1:8080');
