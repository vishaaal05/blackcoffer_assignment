const express = require('express')
const router = express.Router();
const Data = require('../db')

// Basic route
// router.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

// Route to get filtered data
router.get('/filter', async (req, res) => {
  const { endYear, topics, sector, region, PEST, source, country, city } = req.query;
  let filter = {};

  if (endYear) filter.end_year = { $lte: endYear };
  if (topics) filter.topic = { $in: topics.split(',') };
  if (sector) filter.sector = sector;
  if (region) filter.region = region;
  if (PEST) filter.pestle = PEST;
  if (source) filter.source = source;
  if (country) filter.country = country;
  if (city) filter.city = city;

  // console.log('Received query parameters:', req.query);
  // console.log('Constructed filter:', filter);

  try {
    const data = await Data.find(filter);
    console.log('Data retrieved:', data);
    res.json(data);
  } catch (err) {
    console.error('Error retrieving data:', err);
    res.status(500).json({ message: err.message });
  }
});



  router.get('/', async (req, res) => {
    try {
      const data = await Data.find();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });





  module.exports=router
