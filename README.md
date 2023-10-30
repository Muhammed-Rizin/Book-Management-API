# Book Management API

A simple API for managing books, including adding, editing, deleting, and viewing book details.

## Table of Contents
- [API Endpoints](#api-endpoints)
- [Setting Up the Application](#setting-up-the-application)
- [Usage](#usage)
- [Development Decisions](#development-decisions)

## API Endpoints

### Get All Books
- **URL:** `/api/v1/book/getAll`
- **Method:** GET
- **Description:** Get a list of all books in the database.
- **Response:** JSON array of book objects.

### Get Book Details
- **URL:** `/api/v1/book/getDetails/:id`
- **Method:** GET
- **Description:** Get the details of a specific book by its ID.
- **Parameters:**
  - `id` (string): The unique identifier of the book.
- **Response:** JSON object representing the book.

### Add a New Book
- **URL:** `/api/v1/book/add`
- **Method:** POST
- **Description:** Add a new book to the database.
- **Request Body:**
  - `title` (string): The title of the book.
  - `author` (string): The author of the book.
  - `summary` (string): A summary of the book.
- **Response:** JSON object representing the newly added book.

### Edit an Existing Book
- **URL:** `/api/v1/book/edit/:id`
- **Method:** PATCH
- **Description:** Edit the details of an existing book.
- **Parameters:**
  - `id` (string): The unique identifier of the book to be edited.
- **Request Body:** JSON object with fields to be updated.
- **Response:** JSON object representing the edited book.

### Delete a Book
- **URL:** `/api/v1/book/delete/:id`
- **Method:** DELETE
- **Description:** Delete a book by its ID.
- **Parameters:**
  - `id` (string): The unique identifier of the book to be deleted.
- **Response:** No content (204) upon successful deletion.

## Setting Up the Application

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/book-management-api.git
   ```

2. Install the required dependencies:

   ```shell
   cd book-management-api
   npm install
   ```

3. Create a `.env` file in the project root and define the following environment variables:

   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/bookManagementDB
   ```

   Adjust the values as needed, especially the MongoDB connection URI.

4. Start the application:

   ```shell
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

## Usage

Once the application is set up and running, you can use API endpoints to manage books. You can make HTTP requests to the specified endpoints using tools like `curl`, Postman, or any programming language with HTTP request capabilities.

Here are some example requests:

- To add a new book:

  ```shell
  curl -X POST http://localhost:3000/api/v1/book/add -H "Content-Type: application/json" -d '{
    "title": "Sample Book",
    "author": "John Doe",
    "summary": "A sample book about something interesting."
  }'
  ```

- To get all books:

  ```shell
  curl http://localhost:3000/api/v1/book/getAll
  ```

- To get book details by ID (replace `:id` with the actual ID):

  ```shell
  curl http://localhost:3000/api/v1/book/getDetails/:id
  ```

- To edit an existing book by ID (replace `:id` with the actual ID):

  ```shell
  curl -X PATCH http://localhost:3000/api/v1/book/edit/:id -H "Content-Type: application/json" -d '{
    "title": "Updated Book Title"
  }'
  ```

- To delete a book by ID (replace `:id` with the actual ID):

  ```shell
  curl -X DELETE http://localhost:3000/api/v1/book/delete/:id
  ```

Please note that you need to replace `:id` and adjust the request body as needed.

## Development Decisions

- The application uses Express.js as the web framework for handling API requests.
- It connects to a MongoDB database specified in the `.env` file.
- Cross-Origin Resource Sharing (CORS) is enabled to allow requests from specified origins.
- Requests are validated and processed through the defined endpoints.
- Error handling is in place for various scenarios, including invalid IDs or non-existent resources.
