// src/controllers/resorts.js
import prisma from '../prisma/client.js';

const getResorts = async (req, res) => {
  const search = req.query.search;
  console.log('getResorts -> search', search);
  try {
    let resorts;
    if (search) {
      resorts = await prisma.resort.findMany({
        where: {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { location: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        },
      });
    } else {
      resorts = await prisma.resort.findMany();
    }
    res.json(resorts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const addResort = async (req, res) => {
  const { name, location, longitude, latitude, description } = req.body;
  try {
    const newResort = await prisma.resort.create({
      data: { name, location, longitude, latitude, description },
    });
    res.json(newResort);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export { getResorts, addResort };