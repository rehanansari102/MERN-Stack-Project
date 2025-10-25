const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');

// GET /api/staff - Get all staff members
router.get('/', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/staff/:id - Get a specific staff member
router.get('/:id', async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
