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
router.post('/', async (req, res) => {
  try {
    const newListing = new Listing(req.body); // Assuming req.body contains the listing data
    await newListing.save(); // Save the new listing to the database
    res.status(201).json(newListing); // Respond with the created listing
  } catch (err) {
    console.error('Error creating listing:', err);
    res.status(400).json({ error: 'Failed to create listing' });
  }
});

module.exports = router;