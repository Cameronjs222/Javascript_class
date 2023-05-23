const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
Name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Store's name must be at least 3 characters long"],
    unique: [true, "Author is already registured"],
}
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);
