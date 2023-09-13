// import the model 
const Todo = require("../models/Todo");

// Route Handler 
exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.find({})
        //send json response 
        res.status(200).json(
            {
                success: true,
                data: todo,
                message: "Entire Data is Fetched"


            }
        );

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success: false,
                error: err.message,
                message: `server Error `
            }
        )


    }
}

exports.getTodoById = async (req, res) => {
    try {
        // Extract todo item on basis of id 
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})
       

        //given id not found 
        if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:"No Data found "

                }
            )
        }

        

        // data founded 
        res.status(200).json({
            success:true,
            data:todo,
            message:"todo founded successfully"
        })
       
    }
    catch (err) {
        console.error(err);
        console.log(err);

        res.status(500).json(
            {
                success: false,
                error: err.message,
                message: `server Error `
            }
        )
       
       


    }
}