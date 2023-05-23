const Authors = require('../models/author.model');

module.exports.findAllAuthors = (req, res) => {
    Authors.find()
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewAuthor = (req, res) => {
    Authors.create(req.body)
        .then((newlyCreatedProduct) =>
            res.json(newlyCreatedProduct)
        )
        .catch(err => response.status(400).json(err));}

module.exports.updateExistingAuthor = (req, res) => {
    Authors.findOneAndUpdate(
        { _id: req.params },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json(updatedProduct)
        })
        .catch(err => response.status(400).json(err));}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Authors.deleteOne({ _id: req.params })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}