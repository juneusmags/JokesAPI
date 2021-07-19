const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParsel : true,
    useUnifiedTopology : true
})

    .then (() => console.log("fount it"))
    .catch (() => console.log("lost it", err))