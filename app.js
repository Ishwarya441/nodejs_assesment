// app.js
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./config/mysql");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use("/products", productRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
