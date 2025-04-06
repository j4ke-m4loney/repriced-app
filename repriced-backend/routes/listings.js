const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// GET all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
});

// OPTIONAL: Seed route to add a sample listing
router.post('/seed', async (req, res) => {
  try {
    const sample = new Listing({
      title: "Modern 3BR Apartment",
      address: "123 Example Street, Sydney",
      price: 780000,
      originalPrice: 820000,
      imageUrl: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      tag: "-5%"
    });
    await sample.save();
    res.json(sample);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create sample listing' });
  }
});

module.exports = router;