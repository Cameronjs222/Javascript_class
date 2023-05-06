const jokesController = require('../controllers/jokes.contoller');

module.exports = app => {
  app.get('/api/jokes', jokesController.findAllJokes);
  app.post('/api/jokes', jokesController.createNewJoke)
};
