let ht=require("http")
let express=require("express")
let path=require("path")
app = express()
app.use(express.static("public"))
app.get("/example4", (req,res)=>{
    res.sendFile(path.join(__dirname,"form1.html"))
})

app.get("/process",(req,res)=>{
    res.send(`waan ku salaamay <b> ${req.query.txt1} </b> and your tell is <b> ${req.query.txt2}</b>`)
}).listen(3000)







// cl