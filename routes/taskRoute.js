const express = require('express');
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/create", taskController.createTask);
router.get("/getAll", taskController.getAllTasks);

module.exports = router;