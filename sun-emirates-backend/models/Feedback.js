const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  emailId: {
    type: String,
    required: true,
    maxlength: 50
  },
  comments: {
    type: String,
    required: true,
    maxlength: 255
  },
  feedbackOn: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Feedback', feedbackSchema);
