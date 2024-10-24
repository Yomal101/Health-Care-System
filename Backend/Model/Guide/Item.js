const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Last name must be at least 2 characters long'], // Minimum length validation
    trim: true // Remove leading and trailing whitespaces
  },
  image: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    min: [0, 'Age must be a positive number'], // Minimum age validation
    max: [120, 'Age must be less than or equal to 120'] // Maximum age validation
  },
  location: {
    type: String,
    required: true,
    trim: true // Remove leading and trailing whitespaces
  },
  age: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [2, 'Last name must be at least 2 characters long'], // Minimum length validation
    trim: true // Remove leading and trailing whitespaces
  },
});

module.exports = mongoose.model("Guide", itemSchema);
