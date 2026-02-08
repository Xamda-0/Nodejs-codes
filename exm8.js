let express=require("express");
let path=require("path");
let multer=require("multer");
let my=require("mysql2");
let app=express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
let conn=my.createConnection({
    host:"localhost", 
    user:"root",
    password:"",
    database:"evoting"
});
app.get("/aploud",(req,res)=>{
    res.sendFile(path.join(__dirname,"aploud.html"))
})
app.listen(3000)