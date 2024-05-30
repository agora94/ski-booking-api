// src/config/config.js
import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 5000;
export const databaseUrl = process.env.DATABASE_URL;