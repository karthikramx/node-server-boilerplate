const express = require('express');
const router = express.Router();

// Import routes from different modules
const endpoint1 = require('./endpoint1');
const endpoint2 = require('./endpoint2');

// Register the routes with their respective paths
router.use('/', endpoint1);
router.use('/', endpoint2);

module.exports = router;