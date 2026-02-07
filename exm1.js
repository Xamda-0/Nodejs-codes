<<<<<<< HEAD
let http=require("node:http")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>hello world</h1>")
=======
let http=require("node:http")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>hello world</h1>")
>>>>>>> 01a36c8a138e8be3749938617fbb1b75b388c8e9
}).listen(3000); 