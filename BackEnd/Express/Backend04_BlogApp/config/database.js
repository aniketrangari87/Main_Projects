const mongoose = require('mongoose')

require('dotenv').config();
 const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewURlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("db Connection Established successfully "))
        .catch((error) => {
            console.log("issue in db connection ");
            console.log(error);

            process.exit(1);
        })
}
module.exports = dbConnect