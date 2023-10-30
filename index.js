// Import required modules
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')

// Load environment variables from .env file
dotEnv.config()

// Load configuration
const config = require('./config/config') 

// Create an instance of Express
const app = express()

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors())

// Enable JSON request body parsing middleware
app.use(express.json());

// Enable URL-encoded request body parsing middleware
app.use(express.urlencoded({ extended: true }));

// Connect to the MongoDB database
mongoose.connect(config.mongoURI)
.then(() => console.log('Connected to MongoDB')) 
.catch((error) => console.error("MongoDB connection error:", error))

// Define API routes
const bookRouter = require('./routes/v1/bookRoute')
app.use('/api/v1/book',bookRouter)
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Start the Express server
app.listen(config.port, () => {
    console.log(`${config.appName} is running on port ${config.port}`);
});