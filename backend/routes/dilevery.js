const express = require('express');
const router = express.Router();
const Delivery = require('../models/delivery');

// Accept new delivery
router.post('/add', async (req, res) => {
  const delivery = new Delivery(req.body);
  try {
    await delivery.save();
    res.status(201).send(delivery);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get deliveries by ID or Name (orderId)
router.get('/', async (req, res) => {
  try {
    const deliveries = await Delivery.find(req.query);
    res.status(200).send(deliveries);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Reject (delete) a delivery
router.delete('/:id', async (req, res) => {
  try {
    const delivery = await Delivery.findByIdAndDelete(req.params.id);
    if (!delivery) res.status(404).send("No item found");
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
