const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:8wFPzEcfczo1ZFc1@cluster0.qsqaf71.mongodb.net/blackcoffer",  {
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

const dataSchema = new mongoose.Schema({});

const Data = mongoose.model('Data', dataSchema, "data");

module.exports=
    Data
