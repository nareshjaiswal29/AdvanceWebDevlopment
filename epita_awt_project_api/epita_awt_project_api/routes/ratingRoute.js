const express = require('express');
const Router = express.Router();
const todoModel = require('../models/rating');

Router.get('/', (req, res) => {
    todoModel.find()
    .then(
        todos => {
            res.status(200).json(todos);
        }
    )
    .catch(error => console.log(error));
});

Router.post('/', (req, res) => {
    console.log(req.body);
    const {rating, userId, MovieName, poster} = req.body;

    const todo = new todoModel({ 
        rating: rating,
        userId: userId,
        MovieName: MovieName, 
        Poster: poster
    });

    todo.save()
    .then(
        todo => {
            res.status(200).json({"message": "Rating well created !"});
        }
    )
    .catch(error => console.log(error));
});


Router.get('/:id', (req, res) => {
    todoId = req.params.id;

    todoModel.find({userId: todoId})
    .then(todo => {
        res.status(200).json(todo);
    })
    .catch(error => console.log(error));
});

Router.delete('/:id', (req, res) => {
    todoModel.remove({userId: req.params.id})
    .exec()
    .then(result => {
        res.status(200).json("Todo well deleted !");
    })
    .catch(error => console.log(error));
});

module.exports = Router;