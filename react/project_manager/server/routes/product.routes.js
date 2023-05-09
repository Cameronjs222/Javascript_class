const ProductController = require('../controllers/product.contoller');

module.exports = app => {
app.get("/api/product", ProductController.findAllProduct);
app.post("/api/product", ProductController.createNewJoke);
app.get("/api/product/:_id", ProductController.findOneSingleJoke);
app.patch("/api/product/:_id", ProductController.updateExistingJoke);
app.delete("/api/product/:_id", ProductController.deleteAnExistingJoke);
};
