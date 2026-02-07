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
}));

app.get("/user",(req,res)=>{
    res.sendFile(path.join(__dirname,"login.html"));
})

app.get("/home",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/user")
    }
    res.sendFile(path.join(__dirname,"home.html"))
})

app.post("/log",(req,res)=>{
      let user=req.body.txt1
    let pass=req.body.txt2
    if(user=="xamdi" && pass=="1234"){
        req.session.user={
            userid:1,username:"xamdi",role:"admin"
        }
        res.redirect("/home")
    }
    else{
        res.send("invalid username or password")
    }

})
app.get("/logout",(req,res)=>{
    req.session.destroy(()=>res.redirect("/user"))
})

app.listen(3000)