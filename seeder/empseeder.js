const mongooseSeed = require('mongoose-seed');
const mongoose = require("mongoose");
const EmployePoistionModel = require('../model/EmployePosition'); 
const connectDB = require('../dbConfig');


const seedPositions = async () => { 
    await connectDB();
    try{
      await EmployePoistionModel.deleteMany({});
      const Associate = new EmployePoistionModel({ Employe_Position: 'Warehouse Associate' });
      const Lead = new EmployePoistionModel({ Employe_Position: 'Team Lead' });
      const Supervisor = new EmployePoistionModel({ Employe_Position: 'Supervisor' });
      await Associate.save();
      await Lead.save();
      await Supervisor.save();
        
    }
    catch (err) {
        console.error('Error seeding data:', err);
      } finally {
        mongoose.connection.close(); // Close the connection when done
      }
}

seedPositions();