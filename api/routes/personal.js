const router = require('express').Router();
const Personal = require('../models/Personal');
const User = require('../models/User')


router.post('/', async (req, res) => {
    try{
      const newPersonal= new Personal({  
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        gender:req.body.gender,
        location:req.body.location,
        phone:req.body.phone,
        occupation:req.body.occupation,
        about:req.body.about,
      });
        const personal = await newPersonal.save();
        res.status(200).json(personal);
      
    } catch(err) {
      res.status(500).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   const userId=await User.findById(req.param.id);
//   const doctorid=await Personal.findById(req.param.id);
//     try {
//       const personal = await Personal.findById(req.params.id);
//       res.status(200).json(personal);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const doctorid = req.query.doctorid;
    try {
      const doctor=doctorid ? await Personal.findById(doctorid):null;
      if(userId===doctorid){
        const { firstname, updatedAt, ...other } = doctor._doc;
        res.status(200).json(other);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;