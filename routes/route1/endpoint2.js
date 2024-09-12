const express = require('express');
const router = express.Router();

// define the endpoint here
router.post('/endpoint2', (req, res) => {
    res.send('Hello from endpoint2');
});

module.exports = router;