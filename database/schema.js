const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeName: { type: String, required: true },
  ingredients: [String],
  url: { type: String, required: true, unique: true },
});

const lazydish = mongoose.model('lazydish', recipeSchema);
module.exports = lazydish;