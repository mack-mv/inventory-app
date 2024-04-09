const { Item } = require("../models");
const express = require("express");
const router = express.Router();

// Alex - get all items (use http://localhost:3000/api/items to test)
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    if (!items) {
      throw new Error('no items found');
    }
    res.json(items);
  } catch (error) {
    next(error)
  }
});


module.exports = router;