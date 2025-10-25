const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// GET /api/hotels - Get all hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find({ availability: true });
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/hotels/:id - Get a specific hotel
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
