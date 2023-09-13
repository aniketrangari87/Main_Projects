// import Mongoose 
const mongoose = require('mongoose')


// Creating Schema for blog app


const blogSchema =new  mongoose.Schema({

    post: {
        type: String,
        required: true,
        maxLength: 100
    },
    comment: {
        type: String,
        required: true,
        maxLength: 100
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()

    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    },

}
)
module.exports = mongoose.model("Blog" ,blogSchema)
