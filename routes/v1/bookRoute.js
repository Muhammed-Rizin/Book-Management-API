const express = require('express')
const bookRouter = express()

const validationMiddleware = require('../../middleware/validation')
const bookController = require('../../controller/v1/bookController')


// GET all books
bookRouter.get('/getAll',bookController.getAllBooks)

// GET book details
bookRouter.get('/getDetails/:id', validationMiddleware.checkBookId, bookController.getBookDetails)

// POST (add) a new book
bookRouter.post('/add', bookController.addBook)

// PATCH (edit) an existing book
bookRouter.patch('/edit/:id',validationMiddleware.checkBookId, bookController.editBook)

// DELETE a book
bookRouter.delete('/delete/:id', validationMiddleware.checkBookId, bookController.deleteBook)


module.exports = bookRouter