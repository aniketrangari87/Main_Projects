
const User = require("../models/User")
const bcrypt = require("bcrypt")


exports.signup = async (req, res) => {
    try {
        // get  data 
        const { name, email, password, role } = req.body;

        // // check if user is exist 
        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "User already exist ",
        //     })
        // }
        // // Secure password 
        // let hasedPassword;
        // try {
        //     hasedPassword = await bcrypt.hash(password, 10);
        // }
        // catch {
        //     return res.status(500).json({
        //         success: false,
        //         message: "Error in hashing password",
        //     })
        // }

        // create user 
        const user = await User.create({
            name, email, password, role
        })



        return res.status(200).json(
            {
                success: true,
                message: "User Created successfully ",
            }
        )

    }
    catch (err) {
        console.error(err);

        return res.status(500).json(
            {
                success: false,
                message: "Cannot create user , try again later "
            }
        )

    }
}
