const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Create app first
const app = express();

// Middleware
app.use(cors({origin: 'https://preview.repriced.com.au'}));
app.use(express.json());

// Routes
const listingRoutes = require('./routes/listings');
app.use('/api/listings', listingRoutes);

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

