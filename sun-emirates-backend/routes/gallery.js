const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// Get all gallery images
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    if (category && category !== 'all') {
      query.category = category;
    }
    const gallery = await Gallery.find(query).sort({ createdAt: -1 });
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single gallery image
router.get('/:id', async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ message: 'Gallery image not found' });
    }
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create gallery image
router.post('/', async (req, res) => {
  const gallery = new Gallery({
    title: req.body.title,
    image: req.body.image || '',
    category: req.body.category || 'workshop'
  });

  try {
    const newGallery = await gallery.save();
    res.status(201).json(newGallery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update gallery image
router.put('/:id', async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!gallery) {
      return res.status(404).json({ message: 'Gallery image not found' });
    }
    res.json(gallery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete gallery image
router.delete('/:id', async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);
    if (!gallery) {
      return res.status(404).json({ message: 'Gallery image not found' });
    }
    res.json({ message: 'Gallery image deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
