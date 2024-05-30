// prisma/seed.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const skiResorts = [
  { name: 'Mohawk Mountain', location: 'Cornwall, CT', description: 'Skiing in Connecticut', longitude: -73.3292, latitude: 41.8398 },
  { name: 'Mt. Southington', location: 'Southington, CT', description: 'Skiing in Connecticut', longitude: -72.9241, latitude: 41.5812 },
  { name: 'Powder Ridge', location: 'Middlefield, CT', description: 'Skiing in Connecticut', longitude: -72.7114, latitude: 41.5155 },
  { name: 'Ski Sundown', location: 'New Hartford, CT', description: 'Skiing in Connecticut', longitude: -73.0161, latitude: 41.8844 },
  { name: 'Jiminy Peak', location: 'Hancock, MA', description: 'Skiing in Massachusetts', longitude: -73.2928, latitude: 42.5554 },
  { name: 'Wachusett Mountain', location: 'Princeton, MA', description: 'Skiing in Massachusetts', longitude: -71.8861, latitude: 42.4956 },
  { name: 'Nashoba Valley', location: 'Westford, MA', description: 'Skiing in Massachusetts', longitude: -71.4495, latitude: 42.5564 },
  { name: 'Otis Ridge', location: 'Otis, MA', description: 'Skiing in Massachusetts', longitude: -73.0821, latitude: 42.1920 },
  { name: 'Bousquet Mountain', location: 'Pittsfield, MA', description: 'Skiing in Massachusetts', longitude: -73.2817, latitude: 42.4209 },
  { name: 'Ski Blandford', location: 'Blandford, MA', description: 'Skiing in Massachusetts', longitude: -72.9284, latitude: 42.1826 },
  { name: 'Blue Hills', location: 'Canton, MA', description: 'Skiing in Massachusetts', longitude: -71.1126, latitude: 42.2135 },
  { name: 'Ski Bradford', location: 'Haverhill, MA', description: 'Skiing in Massachusetts', longitude: -71.0676, latitude: 42.7793 },
  { name: 'Ski Ward', location: 'Shrewsbury, MA', description: 'Skiing in Massachusetts', longitude: -71.7179, latitude: 42.2868 },
  { name: 'Butternut', location: 'Great Barrington, MA', description: 'Skiing in Massachusetts', longitude: -73.3361, latitude: 42.1906 },
  { name: 'Yawgoo Valley', location: 'Exeter, RI', description: 'Skiing in Rhode Island', longitude: -71.5330, latitude: 41.5126 },
  { name: 'Killington', location: 'Killington, VT', description: 'Skiing in Vermont', longitude: -72.7931, latitude: 43.6266 },
  { name: 'Jay Peak', location: 'Jay, VT', description: 'Skiing in Vermont', longitude: -72.5101, latitude: 44.9373 },
  { name: 'Smugglers\' Notch', location: 'Jeffersonville, VT', description: 'Skiing in Vermont', longitude: -72.7890, latitude: 44.5890 },
  { name: 'Stowe Mountain Resort', location: 'Stowe, VT', description: 'Skiing in Vermont', longitude: -72.7987, latitude: 44.5377 },
  { name: 'Stratton Mountain', location: 'Stratton, VT', description: 'Skiing in Vermont', longitude: -72.9083, latitude: 43.1136 },
  { name: 'Sugarbush', location: 'Warren, VT', description: 'Skiing in Vermont', longitude: -72.8962, latitude: 44.1352 },
  { name: 'Pico Mountain', location: 'Killington, VT', description: 'Skiing in Vermont', longitude: -72.8411, latitude: 43.6622 },
  { name: 'Mount Snow', location: 'W. Dover, VT', description: 'Skiing in Vermont', longitude: -72.9202, latitude: 42.9612 },
  { name: 'Okemo Mountain Resort', location: 'Ludlow, VT', description: 'Skiing in Vermont', longitude: -72.7177, latitude: 43.4038 },
  { name: 'Bolton Valley', location: 'Richmond, VT', description: 'Skiing in Vermont', longitude: -72.8492, latitude: 44.4211 },
  { name: 'Burke Mountain', location: 'Burke, VT', description: 'Skiing in Vermont', longitude: -71.9141, latitude: 44.5884 },
  { name: 'Magic Mountain', location: 'Londonderry, VT', description: 'Skiing in Vermont', longitude: -72.7932, latitude: 43.2130 },
  { name: 'Attitash', location: 'Bartlett, NH', description: 'Skiing in New Hampshire', longitude: -71.2235, latitude: 44.0814 },
  { name: 'Loon Mountain Resort', location: 'Lincoln, NH', description: 'Skiing in New Hampshire', longitude: -71.6349, latitude: 44.0561 },
  { name: 'Cranmore Mountain Resort', location: 'North Conway, NH', description: 'Skiing in New Hampshire', longitude: -71.1207, latitude: 44.0544 },
  { name: 'Wildcat Mountain', location: 'Gorham, NH', description: 'Skiing in New Hampshire', longitude: -71.2012, latitude: 44.2582 },
  { name: 'Cannon Mountain', location: 'Franconia, NH', description: 'Skiing in New Hampshire', longitude: -71.6974, latitude: 44.1562 },
  { name: 'Bretton Woods', location: 'Carroll, NH', description: 'Skiing in New Hampshire', longitude: -71.4412, latitude: 44.2583 },
  { name: 'Mount Sunapee', location: 'Newbury, NH', description: 'Skiing in New Hampshire', longitude: -72.0630, latitude: 43.3155 },
  { name: 'King Pine', location: 'Madison, NH', description: 'Skiing in New Hampshire', longitude: -71.1150, latitude: 43.8706 },
  { name: 'Black Mountain', location: 'Jackson, NH', description: 'Skiing in New Hampshire', longitude: -71.1860, latitude: 44.1791 },
  { name: 'Whaleback', location: 'Enfield, NH', description: 'Skiing in New Hampshire', longitude: -72.1512, latitude: 43.6109 },
  { name: 'Sunday River', location: 'Newry, ME', description: 'Skiing in Maine', longitude: -70.8561, latitude: 44.4738 },
  { name: 'Saddleback Mountain', location: 'Rangeley, ME', description: 'Skiing in Maine', longitude: -70.5277, latitude: 44.9371 },
  { name: 'Shawnee Peak', location: 'Bridgton, ME', description: 'Skiing in Maine', longitude: -70.8232, latitude: 44.0498 },
  { name: 'Mount Abram', location: 'Greenwood, ME', description: 'Skiing in Maine', longitude: -70.7104, latitude: 44.3672 },
  { name: 'Camden Snow Bowl', location: 'Camden, ME', description: 'Skiing in Maine', longitude: -69.1199, latitude: 44.2244 },
  { name: 'Sugarloaf Mountain Resort', location: 'Carrabassett Valley, ME', description: 'Skiing in Maine', longitude: -70.3136, latitude: 45.0310 }
];


async function main() {
  await Promise.all(skiResorts.map(async (resort) => {
    await prisma.resort.create({
      data: resort,
    });
  }));
  console.log('Seeding complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
