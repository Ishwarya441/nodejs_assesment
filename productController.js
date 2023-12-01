// controllers/productController.js
const Product = require("../models/productModel");

module.exports = {
  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const { page = 1, pageSize = 10, productName, category } = req.query;
      const where = {};
      if (productName) where.productName = productName;
      if (category) where.productCategory = category;

      const products = await Product.findAll({
        where,
        offset: (page - 1) * pageSize,
        limit: parseInt(pageSize),
      });

      res.send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).send();
      }

      await product.destroy();
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
