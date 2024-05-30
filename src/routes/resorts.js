// src/routes/resorts.js
import express from 'express';
const router = express.Router();
import { getResorts, addResort } from '../controllers/resorts.js';

// Get all resorts
router.get('/', getResorts);

// Add a new resort
router.post('/', addResort);

export default router;