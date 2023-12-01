// models/productModel.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");

const Product = sequelize.define("Product", {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productCategory: {
    type: DataTypes.STRING,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  productDescription: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false, // Set this to true if you want Sequelize to manage timestamps
});

module.exports = Product;
