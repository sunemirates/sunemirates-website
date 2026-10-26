const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// @route   POST /api/feedback
// @desc    Submit a new feedback
// @access  Public
router.post('/', feedbackController.submitFeedback);

// @route   GET /api/feedback
// @desc    Get all feedbacks
// @access  Public (in production, add authentication)
router.get('/', feedbackController.getAllFeedbacks);

// @route   GET /api/feedback/:id
// @desc    Get single feedback by ID
// @access  Public (in production, add authentication)
router.get('/:id', feedbackController.getFeedbackById);

// @route   DELETE /api/feedback/:id
// @desc    Delete a feedback
// @access  Public (in production, add authentication)
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
