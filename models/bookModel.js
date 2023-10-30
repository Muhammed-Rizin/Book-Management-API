const mongoose = require('mongoose')


const bookSchema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;