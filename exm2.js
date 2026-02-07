let h =require("http")
let fl=require("fs")
h.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    let text =fl.readFileSync("tusaale.txt")
    res.end(`<p>${text.toString()}</p>`)
}).listen(3000);