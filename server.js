const app = require("./app")
require("dotenv").config()
app.listen(process.env.PORT||8080,(req,res)=>{
    console.log(`server running on port no ${process.env.PORT||8080}`)
})
