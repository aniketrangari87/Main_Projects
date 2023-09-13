const mongooes = require("mongoose")



const likeSchema = new mongooes.Schema(
    {
        post:{
            type:mongooes.Schema.Types.ObjectId,
            ref:"Post"
        },
        user:{
            type:String,
            required:true 
        }
    },
)

module.exports = mongooes.model("Like",likeSchema)