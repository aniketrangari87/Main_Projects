
const express = require('express');
const router = express.Router();


// create route 
const {createComment} = require("../controllers/commentController");
const {createPost} = require("../controllers/postController");
const {getPosts} = require("../controllers/postController");
const {likePost} = require("../controllers/likeController");
const {getLikes} = require("../controllers/likeController");
const {unlikeLikes} = require("../controllers/likeController");

// map 
router.post('/comment/createcomment' , createComment )
router.post('/post/createpost' , createPost )
router.get('/post/getposts' , getPosts )
router.post('/like/createlike' , likePost )
router.get('/like/getlikes' , getLikes )
router.post('/unlike' , unlikeLikes )



module.exports = router;