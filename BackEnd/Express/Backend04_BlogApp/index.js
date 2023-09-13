const express = require('express')

const app = express();

// env 
require('dotenv').config()
const PORT = process.env.PORT || 4000;

// middleware 
app.use(express.json());


// import routes 
const blogRoutes = require("./routes/blog")

// mount route 
app.use("/api/v1",blogRoutes)

// start server

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

// connectc to the database 
const dbConnect = require("./config/database")
dbConnect();

app.get("/" ,(req,res)=>{
    res.send(`<h1> Hello Aniket </h1>`)

})
