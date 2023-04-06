const router = require("express").Router();
const Appointment = require("../models/Appointment");

//CREATE APPOINTMENT
router.post("/", async (req, res) => {
  const newAppointment = new Appointment(req.body);
  try {
    const savedAppointment = await newAppointment.save();
    res.status(200).json(savedAppointment);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get all appointment
router.get("/",async(req,res)=>{
  const username=req.query.user;
  try {
    let appoint;
    if (username) {
      appoint = await Appointment.find({ username });
    }else {
      appoint = await Appointment.find();
    }
    res.status(200).json(appoint);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;