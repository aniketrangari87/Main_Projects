const express = require('express');

const app = express();

// load config file 

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// Middleware 
app.use(express.json());

// import route for todo API
const todoRoutes = require("./routes/todos");

// Mounting TODO API 
app.use("api/v1" , todoRoutes);

// Start the server 
app.listen(PORT , ()=>{
    console.log(` Server Started At ${PORT }`);
})

//Connet  to the DATABASE
const dbConnect = require("./config/database")

// Default Route 
app.get("/" , (req , res) =>{
    res.send("<h1> Hello Aniket </h1>")
})