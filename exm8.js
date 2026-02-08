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
app.get("/upload",(req,res)=>{
    res.sendFile(path.join(__dirname,"upload.html"))
})
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/images")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage});
app.post("/upload2",upload.single("txtfile"),(req,res)=>{
    res.send(`uploaded successfully ${req.file.filename}`)
}) 
app.get("/upload3",(req,res)=>{
    let array=["hmp.jpg","fn.jpg","fclty.jpg"]
    let txt=""
    array.forEach((val)=>txt=`<img src='images/${val}' width='200' height='250' alt='sawir'><hr>`)
    res.send(txt)
})
app.listen(3000)