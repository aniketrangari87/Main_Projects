const express = require('express')

const app = express();

const port = 3000;

app.listen(port , () =>{
    console.log(`App is started at ${port}`);
})

app.post("/car" , (req , res) =>{
    res.send("Request is Send");
})

app.get("/" , (req , res ) => {
    res.send("<h1> Hello Aniket </h1>")
})
