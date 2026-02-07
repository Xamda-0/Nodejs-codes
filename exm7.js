let express=require("express");
let path=require("path");
let my=require("mysql2");
let session=require("express-session");
let app=express();
// app.use(express.static(path.join(__dirname,"form1.html")));
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

})
app.listen(3000)