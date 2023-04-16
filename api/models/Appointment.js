const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    appointDate: {
        type: Date,
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
    docusername: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        default: "",
    },
  }, 
  { timestamps: true}
);
AppointmentSchema.index({ appointDate: 1, docusername: 1}, { unique: true });

module.exports = mongoose.model("Appointment", AppointmentSchema);