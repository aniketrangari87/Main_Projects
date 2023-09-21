const monggose = require("mongoose")
require("dotenv").config();



exports.connect = () =>{
    monggose.connect(process.env.MONGODB_URL,{
        useNewUrlParser : true ,
        useUnifiedTopology :  true 
    })
    .then( () => console.log("Db Connection Successfully Established....."))
    .catch( (err ) =>{
        console.log("Issue while connecting with Database ");
        console.error(err);

        process.exit(1);
    })
}