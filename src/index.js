// src/index.js
import express from 'express';
import cors from 'cors';
import { port } from './config.js';
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
import resortsRoutes from './routes/resorts.js';

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
