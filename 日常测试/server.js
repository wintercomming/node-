let http = require('http');
let fs = require('fs');
let data = fs.readFileSync('index.txt');
let data2 = '这是新建并写入的txt文件';
let writeStream = fs.createWriteStream('insert.txt');
writeStream.write(data2,'UTF8')
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end(data.toString());

}).listen(8888);
console.log(data.toString());
console.log('Server is running at http://localhost:8888');