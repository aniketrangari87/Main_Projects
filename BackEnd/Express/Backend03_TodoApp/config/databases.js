// importing mongoose
const mongoose= require('mongoose')

// env Object 
require('dotenv').config()

 // Intiating Connection  With Database

 const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewURlParser : true ,
        useUnifiedTopology:true,
    }) 
    .then(() => console.log("DB connection Established successfully "))
    .catch((error) =>{
        console.log("issue in db Connection ")
        console.log(error)
        process.exit(1)
    })
 }

 module.exports = dbConnect