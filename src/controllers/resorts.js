// src/controllers/resorts.js
const db = require('../config/db');

const getResorts = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM resorts');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const addResort = async (req, res) => {
  const { name, location, description } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO resorts (name, location, description) VALUES ($1, $2, $3) RETURNING *',
      [name, location, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getResorts,
  addResort,
};
