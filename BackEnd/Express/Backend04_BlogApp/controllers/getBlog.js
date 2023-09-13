// import the model 

const Blog = require("../models/Blog")


exports.getBlog= async (req , res )=>{

    try{
    
        // get a post 

        const response = await Blog.find({});

        res.status(200).json(
            {
                success :true ,
                data:response ,
                message:"Post Created Successfully "
            }
        );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success :false ,
                data:"Internal Server Error " ,
                message:err.message
            }
        )

    }
}