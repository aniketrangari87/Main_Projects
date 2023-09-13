// import the model 
const Todo = require("../models/Todo");

// Route Handler 
exports.updateTodo = async (req, res) => {
    try {

        // extract description and tiele 
        const {id} = req.params;
        const { title, description } = req.body;

        // create a new Todo obj and insert to db 
        const response = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
         )

        //send json response 
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Updated  successfully"


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