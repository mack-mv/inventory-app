const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

// Define Sauce model
const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

// Alex - Define Item model
const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  image: Sequelize.STRING,
});


module.exports = {
  db: sequelize,
  Sauce,
  Item,
};
