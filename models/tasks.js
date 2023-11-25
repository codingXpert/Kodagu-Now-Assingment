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
    assignedUser: {
      type: String,
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    completionStatus: {
      type: String,
      default: "pending",
      required: true
    } 
  }
);
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;