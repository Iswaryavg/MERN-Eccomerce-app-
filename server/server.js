const express=require("express")
const app=express();
const cors=require("cors")
const userrouter=require("./userrouter")

app.use(cors({orgin:true}))
app.use(express.json())

app.use("/api",userrouter)

app.listen(5000,()=>{
    console.log("server started on port 5000")
})