const mongoose = require('mongoose');

const PersonalSchema = new mongoose.Schema({
    doctorid: {
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        default:"",
    },
    location:{
        type:String,
        required:true,
    },

    phone: {
        type: String,
        required:true,
    },
    occupation: {
        type: String,
        required:true,
    },
    about:{
        type:String,
        required:true,
    }

  }, 
  { timestamps: true}
);

module.exports = mongoose.model("Personal", PersonalSchema);