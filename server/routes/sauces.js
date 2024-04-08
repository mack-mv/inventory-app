const express = require("express");
const router = express.Router();
const { Sauce } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.json(sauces);     //Alex - .json() will send a JSON response
  } catch (error) {
    next(error);
  }
});

module.exports = router;
