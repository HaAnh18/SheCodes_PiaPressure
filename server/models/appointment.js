const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  date: {
    type: String,
    // required: [true, 'Name is required']
  },
  time: {
    type: String, 
    // minLength: [8, 'Minimum password length is 8 characters']
  },
  problem: {
    type: String,
    // required: [true, 'Username is required']
  },
  patient: { 
    type: String,  
  },
  doctor: { 
    type: String,   
  },
})

module.exports = mongoose.model("Appointment", appointmentSchema);