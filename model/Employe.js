const mongoose = require("mongoose");

const EmployeSchema = new mongoose.Schema({
  first_Name: {
    type: String,
    required: [true, "first_Name  is required"],
    trim: true,
  },
  last_Name: {
    type: String,
    required: [true, "last_Name is required"],
    trim: true,
  },
  phone_Number: {
    type: String,
    required: [true, 'Phone number is required'],
    unique: true, // Ensure phone number is unique
    trim: true, // Removes whitespace from the beginning and end of the string
    match: [/^\(?([2-9][0-9]{2})\)?[-\s\.]?([2-9][0-9]{2})[-\s\.]?([0-9]{4})$/, 'Please fill a valid Canadian phone number'],

  },
  Email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true, // Store email in lowercase
    match: [/.+@.+\..+/, 'Please fill a valid email address'], 
  },
  Address: {
    type: String,
    trim: true,
  },
  pin_Code: {
    type: String,
    uppercase: true, // Store pincode in uppercase
    trim: true,
  },
  Birthdate: {
    type: Date,
  },
  JoiningDate: {
    type: Date, // Use Date type for dates
  },
  EmployeReleaseDate:{
    type: Date, // Use Date type for dates
    default: null,
  },
  EmployePosition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EmployePosition',
    required: true,
  },
isActive: {
    type: Boolean, 
    default: true
},

});


module.exports = mongoose.model("Employe", EmployeSchema);