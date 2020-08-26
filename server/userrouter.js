const express=require("express");
const userrouter=express.Router();
const mongoose=require("mongoose")
const model=require("./model")

mongoose.connect('mongodb://127.0.0.1:27017/euser', { useNewUrlParser: true ,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log( "Mongodb database connection established succesfully")
})
userrouter.get("/getalldata",(req,res)=>
{
    res.send("Hi i will get all data")
})
userrouter.post("/register",(req,res)=>
{
    console.log(req.body)
    res.send("register")
})
userrouter.post("/login",(req,res)=>
{
    console.log(req.body)
    res.send("login")
})

module.exports= userrouter;