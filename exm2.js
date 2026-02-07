<<<<<<< HEAD
let h =require("http")
let fl=require("fs")
h.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    let text =fl.readFileSync("tusaale.txt")
    res.end(`<p>${text.toString()}</p>`)
=======
let h =require("http")
let fl=require("fs")
h.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    let text =fl.readFileSync("tusaale.txt")
    res.end(`<p>${text.toString()}</p>`)
>>>>>>> 01a36c8a138e8be3749938617fbb1b75b388c8e9
}).listen(3000);