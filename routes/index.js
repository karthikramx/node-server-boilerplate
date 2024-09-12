const express = require('express');
const router = express.Router();

// Import routes from different modules
const route1 = require('./route1');
const route2 = require('./route2');


// Register the routes with their respective paths
router.use('/route1', route1);
router.use('/route2', route2);

module.exports = router;