const mongoose = require("mongoose");
const EmployePoistionModel = require("../model/Employe");

const EmployePoistionSchema = new mongoose.Schema({
  Employe_Position: {
    type: String,
    trim: true,
  },

});


module.exports = mongoose.model("EmployePosition", EmployePoistionSchema);