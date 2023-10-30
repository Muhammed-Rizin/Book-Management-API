const Book = require('../../models/bookModel')

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
}

// Get book details
exports.getBookDetails = async (req, res) => {
    try {
        const book = req.book
        return res.status(200).json(book)
    } catch (error) {
        console.log('An error occurred', error.message)
        res.status(500).json({ error: 'An error occurred' })
    }
}

// Add a new book
exports.addBook = async (req, res) => {
    try {
        const { title, author, summary } = req.body
        
        if (!title || !author || !summary) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingBook = await Book.findOne({ title, author})
        if (existingBook) {
            return res.status(409).json({ error: 'A book with the same title and author already exists' });
        }

        const newBook = new Book({ title, author, summary })
        await newBook.save()

        res.status(201).json(newBook)
    } catch (error) {
        console.log('An error occurred', error.message)
        res.status(500).json({ error: 'An error occurred' })
    }
}

// Edit an existing book
exports.editBook = async (req, res) => {
    try {
        const book = req.book
        const { title, author, summary } = req.body
        
        if (title && title !== book.title) {
            const bookWithSameTitleAndAuthor = await Book.findOne({ title, author });
      
            if (bookWithSameTitleAndAuthor && bookWithSameTitleAndAuthor._id.toString() !== book._id.toString()) {
              return res.status(409).json({ error: 'A book with the same title and author already exists' });
            }
            book.title = title;
          }
      
        if (author && author !== book.author) {
            book.author = author;
        }
      
        if (summary && summary !== book.summary) {
            book.summary = summary;
        }

        await book.save();

        res.status(200).json(book);
    } catch (error) {
        console.log('An error occurred', error.message)
        res.status(500).json({ error: 'An error occurred' })
    }
}

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const book = req.book
        await Book.findByIdAndRemove(book._id)
        res.status(204).send()
    } catch (error) {
        console.log('An error occurred', error.message)
        res.status(500).json({ error: 'An error occurred' })
    }
}