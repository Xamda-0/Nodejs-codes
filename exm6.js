let express=require("express")
let path=require("path")
let my= require("mysql2")
let app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
let conn = my.createConnection({
    host:  "localhost",
    user: "root",
    password: "",
    database:  "evoting"
});
app.get("/example6",(req,res)=>{
    res.sendFile(path.join(__dirname,"form1.html"))
})
app.post("/people",(req,res)=>{
    let fullname=req.body.txt1
    let tell=req.body.txt2
    let addressID=req.body.txt3
    // console.log(req.body)

    let data=[fullname,tell,addressID]
    conn.query("insert into people(pno,fullname,tell,addressID) values(null,?,?,?)",data,(err)=>{

        if (err) {
            // console.log(err)
            return res.status(500).send("Failed to save person")
         }

        res.send("Saved successfully");
    })
})
app.post("/tables",(req,res)=>{
    let sql=req.body.qry
    conn.query(sql,(err,result,col)=>{
        if(err){
            console.log(err)
            return res.status(500).sendFile("failed to read")
        }
        res.send(result)
    })
})



// app.post("/tables",(req,res)=>{
//     conn.query("select * from people",(err,rows)=>{
//         if (err) {
//             console.log(err)
//             return res.status(500).send("Failed to retrieve people")
//          }
//          res.send(rows)
//     })
// })
app.listen(3000)
