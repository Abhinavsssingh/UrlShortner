const express = require("express")
const{default:mongoose} = require("mongoose")
const port = 3000
const app = express()
const route = require("../src/route")


app.use(express.json())

mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://AbhinavSIngh:9936522959@cluster0.wtmx5b4.mongodb.net/groupXXDatabase",{ useNewUrlParser: true })
 

.then(()=>console.log("DB connected"))
.catch(err => console.log(err))

app.use('/',route)

// app.use((req,res)=>res.json("incorect url"))

app.listen(port,function(){
    console.log("app running")
})
