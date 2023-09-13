// import models 

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try {
        // fetch  the data req bod 
        const { post, user, body } = req.body;

        const comment = new Comment({
            post, user, body
        });

        // Save the commmet 
        const saveComment = await comment.save();

        //find the post by id , add new commnet in the post commnet aarray
        const updatePost = await Post.findByIdAndUpdate(post, { $push: { comments: saveComment._id } }, { new: true })
            .populate("comments")
            .exec();

        res.json(
            {
                post: updatePost,
            }
        );


    }
    catch (err) {
        return res.status(500).json(
            {
                error: "error  While Creating Comment"
            }
        )
    }

}
