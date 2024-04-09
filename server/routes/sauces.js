const express = require("express");
const router = express.Router();
const { Sauce } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll({});
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const sauce = await Sauce.findByPk(req.params.id);
    res.send(sauce);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newSauce = await Sauce.create(req.body);
    res.send(newSauce);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteSauce = await Sauce.findByPk(req.params.id).destroy(req.body);
    res.send(deleteSauce);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateSauce = await Sauce.findByPk(req.params.id).update(req.body);
    res.send(updateSauce);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
