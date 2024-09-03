const EmployeModel = require("../model/Employe");
const EmployePosition = require("../model/EmployePosition");

exports.createEmploye = async (req, res) => {
    try {
        const EmployeData = new EmployeModel(req.body);
        
        const newEmploye = await EmployeModel.create(EmployeData);
        return res.json({
            success: true,
            message: "Employe added successfully",
            data:newEmploye
        });
    }
    catch (err) {
      if (err.code === 11000) { // 11000 is the error code for duplicate key
        const field = Object.keys(err.keyPattern)[0]; // Get the field that caused the error
      res.status(400).send({ error: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists` });
    } else {
      res.status(500).send({ 
        success:false,
        message:'An error occured while registering new user',
        error:err.message
      });    
       
    }
    }
}


exports.updateEmploye = async (req, res) => {
  try {
    let updateData = {
    first_Name:req.body.first_Name,
    last_Name:req.body.last_Name,
    phone_Number:req.body.phone_Number,
    Email:req.body.Email,
    Address:req.body.Address,
    pin_Code:req.body.pin_Code,
    Birthdate:req.body.Birthdate,
    JoiningDate:req.body.JoiningDate,
    EmployeReleaseDate: req.body.EmployeReleaseDate,
    EmployePosition:req.body.EmployePosition
     }
        const updatedDocument = await EmployeModel.findByIdAndUpdate(
          req.body.id,            // The ID of the document you want to update
          updateData,    // The update data
          { new: true }  // Options: { new: true } returns the updated document
        );
        return res.json({
          success: true,
          message: "Employe updated successfully",
          data:updatedDocument
      });
      
      } catch (error) {
        res.status(500).send({ 
          success:false,
          message:'An error occured while updating Employe',
          error:err.message
        });

  }
}


exports.deleteEmploye = async (req, res) =>{
  try{
    const deletedUser = await EmployeModel.findByIdAndDelete(req.body.id);
    
    if (!deletedUser) {
      res.status(500).send({ 
        success:false,
        message:'Employe not found',
      });
 
    }
    else{
      return res.json({
        success: true,
        message: "Employe Deleted successfully",
    });
    }
  }
  catch{
    res.status(500).send({ 
      success:false,
      message:'An error occured while Deleting Employe',
      error:err.message
    });
  }
}


exports.getAllEmployes = async (req, res) =>{
  try {
    const employees = await EmployeModel.find({}).populate('EmployePosition');;
    return res.json({
      success: true,
      message: "All Employees fethed successfully",
      data: employees
  });
  } catch (err) {
    console.error('Error fetching employees:', err);
    throw err; // Re-throw the error for further handling if necessary
  }
}

exports.getOneEmploye = async (req, res) =>{
  try {
  const employees = await EmployeModel.findById(req.body.id).populate('EmployePosition');
  console.log("employees", employees);
    return res.json({
      success: true,
      message: "Employe fethed successfully",
      data: employees
  });
  }
  catch (err) {
    throw err;
  }
}