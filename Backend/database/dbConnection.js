const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/galactech', options)
    .then(
        () => {
            console.log("Successfully connected to database")
        }
    ).catch((error) => {
        console.log(error);
        console.log("Error connectiong to database");
    })