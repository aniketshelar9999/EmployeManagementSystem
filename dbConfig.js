const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/EmployeManagement");
    console.log("Mongodb is Connected to database!");
  } catch (err) {
    console.log("Could not connect to MongoDB.");
    process.exit(1); // Exit the process with a failure
  }
};

module.exports = connectDB;