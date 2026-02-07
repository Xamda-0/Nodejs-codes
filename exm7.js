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
    // if(user=="xamdi" && pass=="1234"){}
        let sql="select * from users where username=? and pass=?"
        conn.query(sql,[user,pass],(err,result)=>{
            if(err) return res.send(err)
            if(result.length>0){
                req.session.user={
                userid:result[0].uid,username:result[0].username
                }
                res.redirect("/home")
            }
            else {
                res.send("invalid username or password")
            }
        }) //end of connections
}) //end of login validation method
app.get("/api/session-user",(res,req)=>{
    if(!req.session.user){return res.status(401).json({loggedIn:false})
    } // if condition
    res.json({
        loggedIn:true,username:req.session.user.username,
        id:req.session.user.userid,
    })
})
app.get("/logout",(req,res)=>{
    req.session.destroy(()=>res.redirect("/user"))
}) // end of logout

app.listen(3000)