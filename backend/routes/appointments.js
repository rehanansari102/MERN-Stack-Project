const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Hotel = require('../models/Hotel');

// POST /api/appointments - Create a new appointment
router.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      hotelId,
      checkInDate,
      checkOutDate,
      guests,
      specialRequests
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !hotelId || !checkInDate || !checkOutDate || !guests) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    // Check if hotel exists
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    // Validate dates
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    
    if (checkIn >= checkOut) {
      return res.status(400).json({ message: 'Check-out date must be after check-in date' });
    }

    if (checkIn < new Date()) {
      return res.status(400).json({ message: 'Check-in date cannot be in the past' });
    }

    // Create appointment
    const appointment = new Appointment({
      firstName,
      lastName,
      email,
      phone,
      hotelId,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      guests,
      specialRequests
    });

    const savedAppointment = await appointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/appointments - Get all appointments (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('hotelId');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
