const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  specialties: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Staff', staffSchema);
