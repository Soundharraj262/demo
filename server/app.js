// Import required modules
const express = require('express')
const app=express();
const bp = require('body-parser');
const User = require('./model/models');
const connectDB = require('./database/connection');
const cors = require('cors');
const routes = require('./router/router');

require('dotenv').config();

// Connect to the database
connectDB();

// Apply middleware
app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data
app.use(cors()); // Enable CORS to allow requests from other origins
app.use(routes);

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;
console.log(PORT);


// Define a simple route to test server and database connection
app.get('/', (req, res) => {
  res.send("<h1>Database connected!</h1>");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
