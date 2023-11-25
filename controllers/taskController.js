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

  // get all task
  const getAllTasks = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
  
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
  
      const totalTasks = await Task.countDocuments();
      const totalPages = Math.ceil(totalTasks / limit);
  
      let tasks = await Task.find().skip(startIndex).limit(limit);
  
      const pagination = {};
      if (endIndex < totalTasks) {
        pagination.next = {
          page: page + 1,
          limit: limit,
        };
      }
  
      if (startIndex > 0) {
        pagination.prev = {
          page: page - 1,
          limit: limit,
        };
      }
  
      res.json({
        totalTasks: totalTasks,
        totalPages: totalPages,
        currentPage: page,
        tasks: tasks,
        pagination: pagination,
      });
    } catch (err) {
        return res.status(500).json({error: err});
    }
  };

  // get task by id
  const getTaskById = async (req, res) => {
    try {
      const taskId = req.params.id.trim();
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: err});
    }
  };

  // updating a task
  const updateTask = async (req, res, next) => {
    try {
      const taskId = req.params.id.trim(); 
      const { title, description, assignedUser, dueDate, completionStatus } = req.body;
      const task = await Task.findByIdAndUpdate(taskId, {
        title,
        description,
        assignedUser,
        dueDate,
        completionStatus,
      }, { new: true });
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
    } catch (err) {
        return res.status(500).json({error: err});
    }
  };
  

  module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask
  }
