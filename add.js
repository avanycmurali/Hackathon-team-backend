const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://avanyc:avany25murali@ac-ntafnbk-shard-00-00.s6bk36f.mongodb.net:27017,ac-ntafnbk-shard-00-01.s6bk36f.mongodb.net:27017,ac-ntafnbk-shard-00-02.s6bk36f.mongodb.net:27017/hackathondb?ssl=true&replicaSet=atlas-9ujeqf-shard-0&authSource=admin&appName=Cluster0").then(
    ()=>{
        console.log("mongodb connected")
    }
).catch(
    (error)=>{
console.log(error)
    }
)
const team=mongoose.model("team",new mongoose.Schema(
    {
        teamId:String,
        teamName:String,
        teamLeader:String,
        leaderEmail:String,
        leaderPhone:String,
        collegeName:String,
        numofMembers:String,
        projectTitle:String,
        problemState:String,
        technology:String,
        mentor:String,
        registrationDate:String,
        table:String
    }
))

app.post("/add-team",async(req,res)=>{
    await team.create(req.body)
    res.json({"status":"success"})
})

app.listen(3000,()=>{
    console.log("server started")
})