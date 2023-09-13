// import the model 

const Blog = require("../models/Blog")


exports.createBlog= async (req , res )=>{

    try{
        // import data 
        const {post , comment } = req.body;

        // create a post 

        const response = await Blog.create({post ,comment});

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