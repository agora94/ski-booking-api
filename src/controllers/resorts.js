// src/controllers/resorts.js
import prisma from '../prisma/client.js';

const getResorts = async (req, res) => {
  try {
    const resorts = await prisma.resort.findMany();
    res.json(resorts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const addResort = async (req, res) => {
  const { name, location, description } = req.body;
  try {
    const newResort = await prisma.resort.create({
      data: { name, location, description },
    });
    res.json(newResort);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export { getResorts, addResort };