const ProductController = require('../controllers/product.controller');

module.exports = app => {
app.get("/api/products", ProductController.findAllProducts);
app.post("/api/product", ProductController.createNewProduct);
app.get("/api/product/:_id", ProductController.findOneSingleProduct);
app.patch("/api/product/:_id", ProductController.updateExistingProduct); // needs to delete the original item
app.delete("/api/product/:_id", ProductController.deleteAnExistingProduct);
};
