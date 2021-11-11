const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 8000;

// body parser json 
app.use(express.json());
//Cors config
app.use(cors());


app.get('/', (req, res) => {
  res.send('Welcome to Glactech\'s to do list!');
});

const connect = require('./database/dbConnection');
const todo = require('./routes/todoApi');

app.use("/todos",todo);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
