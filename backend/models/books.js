const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
	name: String,
	authorId: String,
	genre: String
})
module.exports = mongoose.model('book', bookSchema)