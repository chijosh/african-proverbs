const mongoose = require('mongoose');

const proverbSchema = new mongoose.Schema({
  proverb: {
    type: String,
    required: [true, 'Please enter a proverb'],
    trim: true,
    unique: true
  },
  category: {
    type: String,
    required: [true, 'A proverb must have a category'],
    enum: {
      values: ['philosophical', 'funny', 'inspirational'],
      message: 'category is either: philosophical, funny, or inspirational'
    }
  },
  origin: {
    type: String,
    required: [true, 'Proverb must have an origin'],
    trim: true
  }
});

const Proverb = mongoose.model('Proverb', proverbSchema);

module.exports = Proverb;
