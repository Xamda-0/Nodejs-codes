let express =require("express")
let app = express()
let path=require("path")
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.get("/example5",(req,res)=>{
    res.sendFile(path.join(__dirname, "form1.html"))
})
app.post("/people",(req,res)=>{
    name1=req.body.txt1
    tell=req.body.txt2
    res.send(`waan ku salaamay <b>${name1}</b>, number-kaada waa <b>${tell}</b>`)
}).listen(3000)