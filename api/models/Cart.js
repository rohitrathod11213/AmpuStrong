const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    prodId: {
        type: Array,
        required: false,
    },
  }, 
  { timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);