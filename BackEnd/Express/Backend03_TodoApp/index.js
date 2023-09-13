const express = require('express')

const app = express();

// env 
require('dotenv').config()
const PORT = process.env.PORT || 4000;

// middleware 
app.use(express.json());


// import routes 
const todoRoutes = require("./routes/todo")

// mount route 

app.use("/api/v1",todoRoutes);

// start server

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

// connectc to the database 
const dbConnect = require("./config/databases")
dbConnect();

app.get("/" ,(req,res)=>{
    res.send(`<h1> Hello Aniket </h1>`)

})
