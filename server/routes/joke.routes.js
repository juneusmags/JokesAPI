const JokeController = require ("../controllers/jokes.controller");


module.exports = app =>{
    //create
    app.post("/api/jokes/create", JokeController.createJoke);

    //read all

    app.get("/api/jokes", JokeController.findAllJokes);

    //readone

    app.get("/api/jokes/:_id", JokeController.findOneJoke);

    //update 

    app.put("/api/jokes/update/:_id", JokeController.updateJoke);

    //delete
    app.put("/api/jokes/delete/:_id", JokeController.deleteJoke);
    
}