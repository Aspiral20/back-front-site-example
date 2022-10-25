const express = require('express');
const router = express.Router();

// Import Routes
const postsRoute = require('./posts');
const userRoute = require('./users');

// Add Routes API
router.use('/posts', postsRoute);
router.use('/users', userRoute);

// Start API work
router.get('/', (req, res, next) => {
    res.json({ message: "Hello from backend express.js" });
})

module.exports = router;