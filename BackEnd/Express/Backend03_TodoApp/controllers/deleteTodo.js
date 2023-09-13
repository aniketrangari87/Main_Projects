// import the model 
const Todo = require("../models/Todo");

// Route Handler 
exports.deleteTodo = async (req, res) => {
    try {

        // extract description and tiele 
        const {id} = req.params;
        

        // create a new Todo obj and insert to db 
        const response = await Todo.findByIdAndDelete({_id:id});

        //send json response 
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "deleted  successfully"


            }
        );

    }
    catch (err) {
        console.error(err);
        console.log(err)
        res.status(500).json(
            {
                success: false,
                data: "internal server Error ",
                message: err.message,
            }
        )

    }
}