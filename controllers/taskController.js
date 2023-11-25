const Task = require('../models/tasks');

// creating a new task
const createTask = async (req, res) => {
    try {
      const { title, description, assignedUser, dueDate } = req.body;
      const task = new Task({ title, description, assignedUser, dueDate });
      await task.save();
      res.status(201).json({
        status: "Success",
        task
      });
    } catch (err) {
      return res.status(500).json({error: err});
    }
  };

  module.exports = {
    createTask
  }
