
const Post = require("../models/postModel")


exports.createPost = async (req,res) =>{

  try{
  const {title , body } = req.body;
  const post = new Post({
    title,body
  });

  const savedPost= await post.save();

  res.json(
    {
        post : savedPost,
    }
  )
  }
  catch(error) {
    return res.status(400).json(
        {
            error:"Error While Creating post"

        }
    )
  }

};

exports.getPosts = async(req ,res ) =>{

    try{
        const posts = await Post.find({}).populate("comments").exec();


        res.json({
            posts
        })

    }
    catch(err){
        return res.status(400).json({
            err:"error "
        })
    }
}


exports.getPost= async(res,req)=>{

    try{
        const post = await Post.findById({_id:id}).populate("commnets").exec();

        res.json(
            {
                post
            }
        )
    }
    catch(err){
        return res.status(400).json({
            err:"error "
        })
    }
}