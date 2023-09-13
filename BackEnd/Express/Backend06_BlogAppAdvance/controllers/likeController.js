

const Post = require("../models/postModel")
const Like = require("../models/likeModel")


exports.likePost = async (req, res) => {

    try {

        const { post, user } = req.body;

        const like = new Like({
            post, user
        })

        const saveLike = await like.save();

        const updatePost = await Post.findByIdAndUpdate(post, { $push: { likes: saveLike._id } }, { new: true })
        .populate("likes")
        .exec();

        res.json(
            {
                post:updatePost,
            }
        )
    }
    catch (err) {
        return res.status(500).json(
            {
                error: "error  While Creating like "
            }
        )

    }


}

exports.getLikes= async(req ,res )=>{

    try{
        const likes = await Post.find({}).populate("likes").exec();

        res.json(
            {
                likes
            }
        )

    }
    catch(err){
        return res.status(500).json(
            {
                err:"issue"
            }
        )

    }
}


exports.unlikeLikes= async(req ,res )=>{

    try{
       const {post , like } =  req.body;
       const deletedLike = await Like.findOneAndDelete({post:post , _id:like})

    const updatePost = await Post.findByIdAndUpdate(post ,
                                                    {$pull : {likes: deletedLike._id}} ,
                                                    {new :true })

    res.json(
        {
            post:updatePost,
        }
    )

    }
    catch(err){
        return res.status(500).json(
            {
                err:"issue while unliking "
            }
        )

    }
}