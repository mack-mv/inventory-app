const express = require("express");
const router = express.Router();
const saucesRouter = require('./sauces');

// different model routers
router.use('/sauces', require('./sauces'));

module.exports = router;
