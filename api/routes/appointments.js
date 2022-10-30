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

module.exports = router;