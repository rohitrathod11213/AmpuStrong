const router = require("express").Router();
const Order = require("../models/Order");
const Product = require("../models/Product");
const mongoose = require("mongoose");

//Get Order
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    let orderProdsId = await Order.findOne({userId}, 'prodId');
    orderProdsId = orderProdsId.prodId.map((orderProdId) => {return mongoose.Types.ObjectId(orderProdId)});
    const orderProds = await Product.find({_id: {$in: orderProdsId}});
    res.status(200).json(orderProds);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create Order
router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;