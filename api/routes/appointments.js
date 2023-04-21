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
  const docuser=req.query.docuser;
  const user=req.query.user;
  try {
    let appoint = [];
    if (docuser) {
      appoint = await Appointment.find({docusername: docuser});
    }else if(user) {
      appoint = await Appointment.find({username: user});
    }
    res.status(200).json(appoint);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete appointment
router.delete("/:id", async(req, res) => {
  try {
    const appoint = await Appointment.findById(req.params.id);
    if (appoint.username === req.body.username) {
      try {
        await appoint.delete();
        res.status(200).json("Appointment has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your appointment!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;