const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const DB_Con = require("./database/DB_Con")
const router = require("./routes/contact")
const path = require("path")
const app = express()
require("dotenv").config()
DB_Con()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
        origin:"https://my-m7ao.onrender.com",
        credentials:true,
        methods:['POST']
    }))
app.use("/api",router)
app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
module.exports = app
