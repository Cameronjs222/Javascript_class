const mongoose = require('mongoose');

const jokesSchema = new mongoose.Schema({
  setUp: {
    type: String,
    required: [true, "Title is required"],
    minlength: [2, "Title must be at least two characters long"],
  },
  punchLine: {
    type: String,
    minlength: [3, "Must be at least 3 characters"],
  },
}, { timestamps: true });

module.exports = mongoose.model('joke', jokesSchema);
