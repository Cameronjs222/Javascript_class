const JokesController = require('../controllers/jokes.contoller');

module.exports = app => {
  app.get("/api/jokes", JokesController.findAllJokes);
  app.post("/api/jokes", JokesController.createNewJoke);
  app.get("/api/jokes/:_id", JokesController.findOneSingleJoke);
  app.patch("/api/jokes/:_id", JokesController.updateExistingJoke);
  app.delete("/api/jokes/:_id", JokesController.deleteAnExistingJoke);
};
