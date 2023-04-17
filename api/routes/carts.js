const router = require("express").Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const mongoose = require("mongoose");

//Get Cart
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    let cartProdsId = await Cart.findOne({userId}, 'prodId');
    cartProdsId = cartProdsId.prodId.map((cartProdId) => {return mongoose.Types.ObjectId(cartProdId)});
    const cartProds = await Product.find({_id: {$in: cartProdsId}});
    res.status(200).json(cartProds);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add to Cart
router.put("/", async (req, res) => {
  const userId = req.body.userId;
  const prodId = req.body.prodId;
  try {
    let cart = await Cart.findOne({userId});
    if(!cart) {
      await Cart.create({userId});
    }
    cart = await Cart.findOne({userId, prodId: {$in: [prodId]}});
    if(!cart) {
      cart = await Cart.findOneAndUpdate({userId}, {$push: {prodId}});
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Empty the cart
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    await Cart.findOneAndUpdate({userId}, {$set: {prodId: []}});
    res.status(200).json("Cart has been emptied");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete from Cart
router.delete("/", async (req, res) => {
    const userId = req.body.userId;
    const prodId = req.body.prodId;
    try {
      const savedCart = await Cart.findOneAndUpdate({userId}, {$pull: {prodId: prodId}});
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;