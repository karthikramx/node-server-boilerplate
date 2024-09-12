const express = require('express');
const router = express.Router();

// define the endpoint here
router.get('/endpoint1', (req, res) => {
    res.send('Hello from endpoint1');
});

module.exports = router;