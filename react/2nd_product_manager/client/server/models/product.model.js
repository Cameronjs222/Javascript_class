const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
Title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [2, "Title must be at least two characters long"],
},
Price: {
    type: Number,
    required: [true, "price is required"],
},
Description: {
    type: String,
    required: [true, "Description is required"]
}
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);
