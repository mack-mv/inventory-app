const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// different model routers
router.use('/sauces', require('./sauces'));

router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    console.error(err);
    next(err);
    }
});

module.exports = router;
