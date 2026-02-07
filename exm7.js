let express=require("express");
let path=require("path");

let my=require("mysql2");
let session=require("express-session");
let app=express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
let conn=my.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"evoting"
});
app.use(session({
    secret:"exm7",
    resave:false,
    saveUninitialized:false,
    cookie:{secure:false,httpOnly:true}
})
);
app.get("/log",(req,res)=>{
    res.sendFile(path.join(__dirname,"login.html"));
    let user=req.body.txt1
    let pass=req.body.txt2
    if(user=="admin" && pass=="1234"){
        res.redirect("/home")
    }
    else{
        res.send("invalid username or password")
    }
})
app.listen(3000)