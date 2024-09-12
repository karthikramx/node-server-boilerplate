const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

// Console log some information
console.log("node server starting...");

// Use the imported routes
app.use('/', routes);

// Connect to the database
mongoose.connect(MONGO_URI, {})
    .then(() => {
        console.log('Connected to the database...')
        // Start the server
        app.listen(PORT, () => {
            console.log('Server started ' + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });

// define the middleware
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    console.log(`Time: ${new Date()}`);
    next();
});





