require("dotenv").config()
const express=require("express");
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
const md5=require("md5");
const multer=require("multer");
const path=require("path");
const passport=require("passport");
const session=require("express-session");
const passportLocalMongoose=require("passport-local-mongoose");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

      cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
  
      cb(null,file.originalname);
    },
  });
  
  const upload = multer({ storage: storage }); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const port=4000;


app.use(session({
    secret:"I am Ajth Kumar",
    resave:true,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

const connection_url="mongodb+srv://AjithKumar:ak1748vk0095@cluster0.zxszl7r.mongodb.net/UserCredentialsDB";
mongoose.connect(connection_url,{useNewUrlParser:true});


const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,min:4,unique:true},
    password:String
});

UserSchema.plugin(passportLocalMongoose);

const userdetailsCollection=mongoose.model("userdetail",UserSchema,"userdetail");

passport.use(userdetailsCollection.createStrategy());
passport.serializeUser(userdetailsCollection.serializeUser());
passport.deserializeUser(userdetailsCollection.deserializeUser());


app.get("/",function(req,res){
    res.send("<h1>Hello</h1>");
});


app.get("/result",function(req,res){
    if(req.isAuthenticated()){
        console.log("You are already authenticated");
    }
    else{
        console.log("You are not authenicated");
    }
});

app.post("/register",function(req,res){
    const newPost=req.body;


/*    newPost.password=md5(newPost.password);

    userdetailsCollection.create(newPost)
    .then(function(data){
        console.log("Success");
        res.status(201).send("Done");
    })
    .catch(function(err){
        console.log(err);
        res.status(400).send("Fault Occur");
    });                                            */


        console.log(newPost.password);
    const user=new userdetailsCollection({username:newPost.username});
    userdetailsCollection.register(user,newPost.password,function(err,user){
        if(err){
            console.log(err);
            res.redirect("/register");
        }
        else{
            passport.authenticate("local")(req,res,function(){
                console.log("You are registered successfully");
            });
        }
    });                                   

});

app.post("/login",function(req,res){
    const newPost=req.body;
    
    const user=new userdetailsCollection({
        username:newPost.username,
        password:newPost.password
    });

    req.login(user,function(err){
        if(err){
            console.log(err);
        }
        else{
            passport.authenticate("local")(req,res,function(err){
                console.log("you are authenticated");
            })
        }
    })
});


app.post("/newPost",upload.single('file'),function(req,res){
    const newPost=req.file;

    console.log(req.file);
});

const db=mongoose.connection

db.once("open",function(){
    app.listen(port,function(req,res){
        console.log("Server is Started");
    });
})
.on("error",function(){
    console.log("Error Occured in Opening MongoDB");
});