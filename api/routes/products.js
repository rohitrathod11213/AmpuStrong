const router = require("express").Router();
const Product = require("../models/Product");

//get all products
router.get("/",async(req,res)=>{
  try {
    const appoint = await Product.find();
    res.status(200).json(appoint);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;