// src/index.js
const express = require('express');
const cors = require('cors');
const { port } = require('./config/config');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const resortsRoutes = require('./routes/resorts');

// Use Routes
app.use('/api/resorts', resortsRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to the Ski Resort Booking API');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
