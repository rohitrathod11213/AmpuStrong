const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
  }, 
  { timestamps: true}
);

module.exports = mongoose.model("Appointment", AppointmentSchema);