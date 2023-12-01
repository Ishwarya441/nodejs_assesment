// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/", productController.createProduct);
router.get("/:id", productController.getProductById);
router.get("/", productController.getAllProducts);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
