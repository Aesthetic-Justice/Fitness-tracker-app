const db = require('../config/connection');
const { Set } = require('../models');
const setSeeds = require('./setSeeds.json');

db.once('open', async () => {
  await Set.deleteMany({});
  await Set.create(setSeeds);

  console.log('all done!');
  process.exit(0);
});
