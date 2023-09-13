const express = require("express")

const app = express()

require("dotenv").config();

const PORT = process.env.PORT || 4000 ;



app.use(express.json())

// route 

const blog = require("./routes/blog")


// mounting 

app.use("/api/v1" , blog);

// database 

const connectWithDb = require("./config/database")
connectWithDb();



app.listen(PORT  , ()=>{

    console.log(`App is Started At ${PORT}`);
})

app.get("/" , (req,res)=>{
    res.send(`<h1 >Hi Aniket </h1>`);
})