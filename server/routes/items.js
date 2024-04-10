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

router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      throw new Error('no item found');
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
    if (!newItem) {
      throw new Error('New item not created');
    }
    res.json(newItem);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteItem = await Item.findByPk(req.params.id).destroy(req.body);
    if (!deleteItem) {
      throw new Error('Item not deleted');
    }
    res.json(deleteItem);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateItem = await Item.findByPk(req.params.id).update(req.body);
    if (!updateItem) {
      throw new Error('Item not updated');
    }
    res.json(updateItem);
  } catch (error) {
    next(error);
  }
});


module.exports = router;