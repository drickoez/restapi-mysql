const { DataTypes } = require("sequelize");
const database = require("../database");

const Product = database.define("Product", {
  users_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stocks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
});

module.exports = Product;
