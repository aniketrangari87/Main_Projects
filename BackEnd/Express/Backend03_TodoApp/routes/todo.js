const express = require('express')
const router = express.Router()


// import controller 
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo")
const {deleteTodo} = require("../controllers/deleteTodo")


// define routes
router.post("/createtodo" , createTodo);
router.get("/gettodo" , getTodo);
router.get("/gettodo/:id" , getTodoById);
router.put("/updateTodo/:id" , updateTodo);
router.delete("/deleteTodo/:id" ,deleteTodo)

module.exports= router