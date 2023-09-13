const express=require('express')
const router = express.Router()

// import route 
const {createBlog} = require('../controllers/createBlog');
const {getBlog} = require('../controllers/getBlog');


// create routes

router.post("/createblog" , createBlog)
router.get("/getblog" , getBlog)

module.exports=router


