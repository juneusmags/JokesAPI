const Joke = require("../models/jokes.model");

//create
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch (err => res.json({message : "Something went wrong with create", error : err}))
}

//read
module.exports.findOneJoke = (req,res) => {
    Joke.find({_id: req.params._id})
        .then(oneJoke => res.json(oneJoke))
        .catch (err => res.json({message : "Something went wrong with find one", error : err}))
}

//read all
module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch (err => res.json({message : "Something went wrong with find all", error : err}))
}

//update
module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body,{new : true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch (err => res.json({message : "Something went wrong with update", error : err}))
}

//delete

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deletedjoke => res.json(deletedJoke))
        .catch (err => res.json({message : "Something went wrong with delete", error : err}))
}