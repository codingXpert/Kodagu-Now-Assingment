const express = require('express');
const router = express.Router();
const taskController = require("../controllers/taskController");

router.use("/create", taskController.createTask);

module.exports = router;