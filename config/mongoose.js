const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db = await mongoose.connect('mongodb://localhost:27017/tasks');
    console.log(`connected to mongoDB ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Error ${error}`);
  }
};
module.exports = connectDB();