const Book = require('../models/bookModel')
const mongoose = require('mongoose')

exports.checkBookId = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }

        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        req.book = book;

        next();
    } catch (error) {
        console.log('An error occurred', error.message)
        res.status(500).json({ error: 'An error occurred' })
    }
};

