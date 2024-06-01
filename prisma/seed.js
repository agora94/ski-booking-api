// prisma/seed.js
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
const prisma = new PrismaClient();


async function main() {
  const skiResorts = JSON.parse(fs.readFileSync('./ski_resorts.json', 'utf8'));

  await Promise.all(skiResorts.map(async (resort) => {
    resort.latitude = parseFloat(resort.latitude);
    resort.longitude = parseFloat(resort.longitude)*-1;
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
