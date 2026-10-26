const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    enum: ['workshop', 'fabrication', 'equipment', 'projects'],
    default: 'workshop'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Gallery', gallerySchema);
