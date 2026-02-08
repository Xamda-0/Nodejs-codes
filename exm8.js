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
    let sql="insert into images(image) values(?)";
    let data=[req.file.filename]
    conn.query(sql,data,(err,result)=>{
        if(err) return res.status(500).send("DB error")
        res.send(`inserted success`)
    })
    // res.send(`uploaded successfully ${req.file.filename}`)
}) 
app.get("/upload3",(req,res)=>{
    //reading with file
    // let array=["hmp.jpg","fn.jpg","fclty.jpg"]
    // let txt=""
    // array.forEach((val)=>+=`<img src='images/${val}' width='200' height='250' alt='sawir'><hr>`)
    // res.send(txt)
    //reading with database
    let sql="select * from images order by im_no desc limit 5";
    conn.query(sql,(err,result)=>{
        if(err) return res.status(500).send("db error")
        let txt=""
    result.forEach((val)=>txt+=`<img src='images/${val.image}' width='200' height='250' alt='sawir'><hr>`)
    res.send(txt)
    })
})
app.listen(3000)