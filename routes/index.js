const express = require('express');
const router = express.Router();

router.use("/api/task", require("../routes/taskRoute"));

module.exports = router;