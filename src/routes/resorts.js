// src/routes/resorts.js
const express = require('express');
const router = express.Router();
const { getResorts, addResort } = require('../controllers/resorts');

// Get all resorts
router.get('/', getResorts);

// Add a new resort
router.post('/', addResort);

module.exports = router;
