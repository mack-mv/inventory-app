//Router to retrieve data from the sauces database - Made my Michael
// use the method "http://localhost:3000/api/sauces/(# of sauce you want retrieved)" to find the single sauce needed

const express = require('express');
const router = express.Router();
const { Sauce } = require('../models');


// GET route to retrieve a specific sauce
router.get('/:id', async (req, res, next) => {
  try {
    const sauce = await Sauce.findByPk(req.params.id);
    if (!sauce) {
      return res.status(404).json({ error: 'Sauce not found' });
    }
    res.json(sauce);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
