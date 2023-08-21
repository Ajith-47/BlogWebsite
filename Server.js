require("dotenv").config()
const express=require("express");
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
const md5=require("md5");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const port=4000;

const connection_url="mongodb+srv://AjithKumar:ak1748vk0095@cluster0.zxszl7r.mongodb.net/UserCredentialsDB";
mongoose.connect(connection_url,{useNewUrlParser:true});

const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,min:4,unique:true},
    password:{type:String,required:true}
});

const userdetailsCollection=mongoose.model("userdetail",UserSchema,"userdetail");

app.get("/",function(req,res){
    res.send("<h1>Hello</h1>");
});

app.post("/register",function(req,res){
    const newPost=req.body;
    newPost.password=md5(newPost.password);

    userdetailsCollection.create(newPost)
    .then(function(data){
        console.log("Success");
        res.status(201).send("Done");
    })
    .catch(function(err){
        console.log(err);
        res.status(400).send("Fault Occur");
    });
})

app.post("/login",function(req,res){
    const newPost=req.body;
    userdetailsCollection.findOne({username:newPost.username})
    .then(function(data){
        if(md5(newPost.password)===data.password){
        console.log("Success");
        res.status(201).send("Done");
        }
        else{
            res.status(400).send("Fault Occur");
        }
    })
    .catch(function(err){
        console.log(err);
        res.status(400).send("Fault Occur");
    });
});

const db=mongoose.connection

db.once("open",function(){
    app.listen(port,function(req,res){
        console.log("Server is Started");
    });
})
.on("error",function(){
    console.log("Error Occured in Opening MongoDB");
})