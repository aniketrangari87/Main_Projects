const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/createUser");
const { getUser } = require("../controllers/getUser");
router.post("/createUser", createUser);
router.get("/getallUsers", getUser);

module.exports = router;
