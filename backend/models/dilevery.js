const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  deliveryDate: { type: Date, required: true },
  deliveryAddress: { type: String, required: true },
  deliveryFee: { type: Number, required: true },
});

module.exports = mongoose.model('Delivery', deliverySchema);
