// import mongooes 
const mongooes = require('mongoose')

// Create  Schema 

const todoSchema = new mongooes.Schema(
    {
        title:{
            type: String ,
            required : true ,
            maxLength : 50
        },
        description:{
            type : String ,
            required : true ,
            maxLength: 100
        },
        createdAt:{
            type :Date ,
            required :true ,
            default : Date.now()

        },
        updatedAt:{
            type:Date ,
            required :true ,
            default : Date.now()
        },
    }
);

module.exports = mongooes.model("Todo",todoSchema)