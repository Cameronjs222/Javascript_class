const AuthorController = require('../controllers/authors.controller');

module.exports = app => {
app.get("/api/authors", AuthorController.findAllAuthors);
app.post("/api/authors", AuthorController.createNewAuthor);
app.patch("/api/authors/:_id", AuthorController.updateExistingAuthor);
app.delete("/api/authors/:_id", AuthorController.deleteAnExistingAuthor);
};
