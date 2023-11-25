const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    assigned_user: {
      type: Number,
      required: true
    },
    due_date: {
      type: Date,
      required: true
    },
    completion_status: {
      type: String,
      default: "pending",
      required: true
    } 
  }
);
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;