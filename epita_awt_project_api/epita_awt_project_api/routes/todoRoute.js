const express = require('express');
const Router = express.Router();
const todoModel = require('../models/todoModel');

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
    const {title, content} = req.body;

    const todo = new todoModel({ 
        title: title,
        content: content
    });

    todo.save()
    .then(
        todo => {
            res.status(200).json({"message": "Todo well created !"});
        }
    )
    .catch(error => console.log(error));
});

Router.delete('/:id', (req, res) => {
    todoModel.remove({_id: req.params.id})
    .exec()
    .then(result => {
        res.status(200).json("Todo well deleted !");
    })
    .catch(error => console.log(error));
});

Router.get('/:id', (req, res) => {
    todoId = req.params.id;

    todoModel.findOne({_id: todoId})
    .then(todo => {
        res.status(200).json(todo);
    })
    .catch(error => console.log(error));
});

module.exports = Router;